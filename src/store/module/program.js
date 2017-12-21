import programsApi from '@/api/programs'
import * as types from '../types'

const state = {
  programs: []
}

const getters = {
  allReadyItem: state => {
    return state.programs.filter(item => item.status === 'ready')
  },
  allPendingItem: state => {
    return state.programs.filter(item => item.status === 'pending')
  },
  allFinishItem: state => {
    return state.programs.filter(item => item.status === 'finished')
  }
}

const actions = {
  getAllPrograms ({commit}) {
    programsApi.getPrograms(programs => {
      commit(types.RECEIVE_PROGRAM, {programs})
    })
  }
}

const mutations = {
  [types.RECEIVE_PROGRAM] (state, {programs}) {
    state.programs = programs
  },
  [types.PROGRAM_UPDATE_REQUEST] (state, {id, status}) {
    state.programs.find(p => p.id === id).status = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
