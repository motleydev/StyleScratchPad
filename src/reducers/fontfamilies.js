const getFontFamilies = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FONT_FAMILY':
      let newFontFamilies =
      	Object.assign(
      		{},
      		state,
      		action.payload.fontFamilies)

      return newFontFamilies

    default:
      return state
  }
}

export default getFontFamilies