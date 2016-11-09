
const getColors = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR_SETTINGS':
      let newArr = {...state}
      newArr[action.postion][action.index] = action.payload
      return newArr

  default:
      return state
  }
}

export default getTypeSettings