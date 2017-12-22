import taskApi from '@/api/task'
import * as types from '../types'
import {updateProgramStatus} from '../actions'

const state = {
  tasks: []
}

const getters = {
  getTasksByProgram: (state) => (programId) => {
    return state.tasks.filter(task => task.programId === programId)
  },
  getUndoneTasks: (state) => (programId) => {
    return state.tasks.filter(task => task.programId === programId && task.status === 'undone').length
  },
  getDoneTasks: (state) => (programId) => {
    return state.tasks.filter(task => task.programId === programId && task.status === 'done').length
  }
}

const actions = {
  getAllTasks ({commit}) {
    taskApi.getTasks(tasks => {
      console.log(tasks)
      commit(types.RECEIVE_TASK, {tasks})
    })
  },
  updateTaskStatus ({commit, getters}, {taskId, programId, status = 'done'}) {
    commit(types.TASK_UPDATE_REQUEST, {taskId: taskId, status: status})
    if (getters.getUndoneTasks(programId) === 0) {
      updateProgramStatus({commit}, programId, 'finished')
    } else {
      updateProgramStatus({commit}, programId, 'pending')
    }
  }
}

const mutations = {
  [types.RECEIVE_TASK] (state, {tasks}) {
    state.tasks = tasks
  },
  [types.TASK_UPDATE_REQUEST] (state, {taskId, status}) {
    state.tasks.find(task => task.id === taskId).status = status
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
