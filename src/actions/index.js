export const updateTypeSettings = (index, props) => {
	return {
		type: 'UPDATE_TYPE_SETTINGS',
		index: index,
		payload: props
	}
}

export const updateFontFamilies = (payload) => {
	return {
		type: 'UPDATE_FONT_FAMILY',
		payload: payload
	}
}