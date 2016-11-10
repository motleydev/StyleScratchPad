const getActiveState = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STATE':
      return action.number
  default:
      return state
  }
}

export default getActiveState
