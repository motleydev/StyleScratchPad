const getCurrentDevice = (state = '', action) => {
  switch (action.type) {
    case 'GET_CURRENT_DEVICE':
      let newState = new String(state)
      
      newState = action.payload

      return newState

    default:
      return state
  }
}

export default getCurrentDevice