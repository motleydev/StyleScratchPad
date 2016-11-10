
const getColors = (state = {}, action) => {
  let newArr = {...state}
  switch (action.type) {
    case 'UPDATE_COLOR_SETTINGS':
      newArr[action.position][action.index] = {rgb: action.payload}
      return newArr

    case 'ADD_COLOR_SETTINGS':
      newArr[action.position].push({rgb: action.payload})
      return newArr
    case 'REMOVE_COLOR_SETTINGS':
      newArr[action.position].splice(action.index, 1)
      return newArr

  default:
      return state
  }
}

export default getColors
