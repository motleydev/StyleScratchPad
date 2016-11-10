const getName = (state = '', action) => {
  console.log('name', action)
  switch (action.type) {
    case 'UPDATE_NAME':
      return action.name
  default:
      return state
  }
}

export default getName
