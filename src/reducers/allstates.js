const getStates = (state = [], action) => {
  const newArr = [...state]
  switch (action.type) {
    case 'ADD_STATE':
    	newArr[action.index] = action.payload
      return newArr
  default:
      return state
  }
}

export default getStates
