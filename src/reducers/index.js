import { combineReducers } from 'redux'
import getTypeSettings from './typography'
import getFontFaces from './fontfaces'
import getFontFamilies from './fontfamilies'
import getCurrentDevice from './devices'
import getColors from './colors'
import getStates from './allstates'
import getActiveState from './activestate'

const styleApp = combineReducers({
  responsiveType: getTypeSettings,
  allFonts: getFontFaces,
  fontFamilies: getFontFamilies,
  currentDevice: getCurrentDevice,
  colors: getColors,
  allStates: getStates,
  activeState: getActiveState
})

export default styleApp
