const getTypeSettings = (state = {}, action) => {
  let newObj = Object.assign({}, state)
  switch (action.type) {
    case 'UPDATE_TYPE_SETTINGS':
      newObj[action.device][action.index] = action.payload
      return newObj
    case 'REPLACE_TYPE_SETTINGS':
      newObj = action.payload
      return newObj

  default:
      return state
  }
}

export default getTypeSettings
