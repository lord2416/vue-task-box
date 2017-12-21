import * as types from './types'

export const updateProgramStatus = ({commit}, id, status) => {
  commit(types.PROGRAM_UPDATE_REQUEST, {id: id, status: status})
}
