
const getColors = (state = {}, action) => {
  let newObj = {...state}
  switch (action.type) {
    case 'UPDATE_COLOR_SETTINGS':
      newObj[action.position][action.index] = {rgb: action.payload}
      return newObj
    case 'ADD_COLOR_SETTINGS':
      newObj[action.position].push({rgb: action.payload})
      return newObj
    case 'REMOVE_COLOR_SETTINGS':
      newObj[action.position].splice(action.index, 1)
      return newObj
    case 'REPLACE_COLOR_SETTINGS':
      newObj = action.payload
      return newObj

  default:
      return state
  }
}

export default getColors
