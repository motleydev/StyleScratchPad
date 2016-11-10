export const updateTypeSettings = (index, props, device) => {
	return {
		type: 'UPDATE_TYPE_SETTINGS',
		index: index,
		device: device,
		payload: props
	}
}

export const updateFontFamilies = (payload) => {
	return {
		type: 'UPDATE_FONT_FAMILY',
		payload: payload
	}
}

export const updateCurrentDevice = (payload) => {
	return {
		type: 'GET_CURRENT_DEVICE',
		payload: payload
	}
}

export const updateColorSettings = (index, position, payload) => {
	return {
		type: 'UPDATE_COLOR_SETTINGS',
		index: index,
		position: position,
		payload: payload
	}
}

export const addColorSettings = (position, payload) => {
  return {
    type: 'ADD_COLOR_SETTINGS',
    position: position,
    payload: payload
  }
}

export const removeColorSettings = (index, position) => {
  return {
    type: 'REMOVE_COLOR_SETTINGS',
    index: index,
    position: position
  }
}

export const addState = (index, payload) => {
  return {
    type: 'ADD_STATE',
    index,
    payload
  }
}