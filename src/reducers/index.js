import { combineReducers } from 'redux'
import getTypeSettings from './typography'
import getFontFaces from './fontfaces'
import getFontFamilies from './fontfamilies'

const styleApp = combineReducers({
  typeElements: getTypeSettings,
  allFonts: getFontFaces,
  fontFamilies: getFontFamilies
})

export default styleApp