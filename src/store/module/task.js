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
  async getAllTasks ({commit}) {
    taskApi.getTasks(tasks => {
      commit(types.RECEIVE_TASK, tasks)
    })
  },
  updateTaskStatus (store, {taskId, programId, status = 'done'}) {
    store.commit(types.TASK_UPDATE_REQUEST, {taskId, status})
    if (getters.getUndoneTasks(programId) === 0) {
      updateProgramStatus(store, programId, 'finished')
    }
    if (getters.getDoneTasks(programId) === 0) {
      updateProgramStatus(store, programId, 'pending')
    }
  }
}

const mutations = {
  [types.RECEIVE_TASK] (state, {tasks}) {
    state.tasks = tasks
  },
  [types.TASK_UPDATE_REQUEST] (state, {taskId, status}) {
    state.tasks.find(task => task.taskId === taskId).status = status
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
