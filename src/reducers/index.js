import { combineReducers } from 'redux'
import typeElements from './typography'
import getFontFaces from './fontfaces'

const styleApp = combineReducers({
  typeElements: typeElements,
  allFonts: getFontFaces
})

export default styleApp