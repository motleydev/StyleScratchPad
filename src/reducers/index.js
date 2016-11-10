import { combineReducers } from 'redux'
import getTypeSettings from './typography'
import getFontFaces from './fontfaces'
import getFontFamilies from './fontfamilies'
import getCurrentDevice from './devices'
import getColors from './colors'

const styleApp = combineReducers({
  responsiveType: getTypeSettings,
  allFonts: getFontFaces,
  fontFamilies: getFontFamilies,
  currentDevice: getCurrentDevice,
  colors: getColors
})

export default styleApp
