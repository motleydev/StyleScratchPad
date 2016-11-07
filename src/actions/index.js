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