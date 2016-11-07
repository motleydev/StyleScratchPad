
const getTypeSettings = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_TYPE_SETTINGS':
      let newArr = {...state}
      newArr[action.device][action.index] = action.payload
      return newArr

  default:
      return state
  }
}

export default getTypeSettings