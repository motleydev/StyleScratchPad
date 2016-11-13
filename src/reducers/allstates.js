const getStates = (state = [], action) => {
  let newArr = [...state]
  switch (action.type) {
    case 'ADD_STATE':
    	newArr.push(JSON.parse(JSON.stringify(action.payload)))
      return newArr
    case 'REMOVE_STATE':
      newArr.splice(action.index, 1)
      return newArr
    case 'UPDATE_STATE':
      newArr[action.index] = action.payload
      return newArr
    case 'UPDATE_STATE_NAME':
      newArr[action.index].name = action.payload
      return newArr
    case 'HYDRATE_STATE':
      newArr = action.payload
      return newArr

  default:
      return state
  }
}

export default getStates
