// const typeset = (state = {}, action) => {
//   switch (action.type) {
//     case 'UPDATE_TYPESET':

//       return Object.assign({}, state, action)

//     default:
//       return state
//   }
// }

const getFontFaces = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_TYPESETTINGS':
      
      let newArr = [...state]
      newArr[index] = typeset(action)
      return newArr

    default:
      return state
  }
}

export default getFontFaces