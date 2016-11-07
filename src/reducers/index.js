import { combineReducers } from 'redux'
import getTypeSettings from './typography'
import getFontFaces from './fontfaces'
import getFontFamilies from './fontfamilies'
import getCurrentDevice from './devices'

const styleApp = combineReducers({
  responsiveType: getTypeSettings,
  allFonts: getFontFaces,
  fontFamilies: getFontFamilies,
  currentDevice: getCurrentDevice
})

export default styleApp