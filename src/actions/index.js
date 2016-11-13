export const updateTypeSettings = (index, payload, device) => {
	return {
		type: 'UPDATE_TYPE_SETTINGS',
		index,
		device,
		payload
	}
}

export const replaceTypeSettings = (payload) => {
  return {
    type: 'REPLACE_TYPE_SETTINGS',
    payload
  }
}

export const updateFontFamilies = (payload) => {
	return {
		type: 'UPDATE_FONT_FAMILY',
		payload: payload
	}
}

export const replaceFontFamilies = (payload) => {
  return {
    type: 'REPLACE_FONT_FAMILY',
    payload
  }
}

export const updateCurrentDevice = (payload) => {
	return {
		type: 'GET_CURRENT_DEVICE',
		payload
	}
}

export const updateColorSettings = (index, position, payload) => {
	return {
		type: 'UPDATE_COLOR_SETTINGS',
		index,
		position,
		payload
	}
}

export const replaceColorSettings = (payload) => {
  return {
    type: 'REPLACE_COLOR_SETTINGS',
    payload
  }
}

export const addColorSettings = (position, payload) => {
  return {
    type: 'ADD_COLOR_SETTINGS',
    position,
    payload
  }
}

export const removeColorSettings = (index, position) => {
  return {
    type: 'REMOVE_COLOR_SETTINGS',
    index,
    position
  }
}

export const addState = (payload) => {
  return {
    type: 'ADD_STATE',
    payload
  }
}

export const removeState = (index) => {
  return {
    type: 'REMOVE_STATE',
    index
  }
}

export const updateState = (index, payload) => {
  return {
    type: 'UPDATE_STATE',
    index,
    payload
  }
}

export const updateStateName = (index, payload) => {
  return {
    type: 'UPDATE_STATE_NAME',
    index,
    payload
  }
}

export const hydrateState = (payload) => {
  return {
    type: 'HYDRATE_STATE',
    payload
  }
}


export const updateCurrentState = (number) => {
  return {
    type: 'SET_ACTIVE_STATE',
    number
  }
}
