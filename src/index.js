import 'core-js/fn/object/assign';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import styleApp from './reducers'
import App from './components/Main';

import { saveState } from '../lib/loadState'

const markPro = require('xml!./sources/fonts_src/fontlist.xml');
let markProProcess = markPro.fonts.font.map((font) => {
    return font.$.CssFamilyName
})

let manFonts = [
    'Mark W01 Narrow',
    'Mark W01 Narrow Italic',
    'Mark W01 Narrow Bold',
    'Mark W01 Narrow Bold Italic',
    'Arnhem Black',
    'Arnhem BlackItalic',
    'Arnhem Blond',
    'Arnhem BlondItalic',
    'Arnhem Bold',
    'Arnhem BoldItalic',
    'Arnhem Normal',
    'Arnhem NormalItalic',
    'Georgia',
    'Arial']


// let appstate = {
//     globalSize: 16,


//     originalFontFamiles: {},
// }
let baseFontElements = [
        {
            name: 'h1',
            size: 5.75,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'headers'
        }, {
            name: 'h2',
            size: 4.75,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'headers'
        }, {
            name: 'h3',
            size: 3.75,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'headers'
        }, {
            name: 'h4',
            size: 2.5,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'headers'
        }, {
            name: 'h5',
            size: 1.75,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'headers'
        }, {
            name: 'h6',
            size: 1.75,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'headers'
        }, {
            name: 'p',
            size: 1.25,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'body'
        }, {
            name: 'li',
            size: 1.25,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'body'
        }, {
            name: 'small',
            size: 0.75,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'body'
        }, {
            name: 'pre',
            size: 1.25,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'body'
        }, {
            name: 'label',
            size: 1,
            lineHeight: 1.25,
            kearning: 0,
            marginAfter: 0,
            class: 'body'
        }
    ]

let color = {
  foreground: [
        {
          rgb: [45,170,215]
        },
        {
          rgb: [230,0,85]
        },
        {
          rgb: [163,210,11]
        },
        {
          rgb: [242,126,0]
        },
        {
          rgb: [122,32,172]
        },
        {
          rgb: [246, 177, 184]
        },
        {
          rgb: [216, 230, 177]
        },
        {
          rgb: [252, 206, 161]
        },
        {
          rgb: [192, 170, 210]
        }
      ],
      background: [
        {
          rgb: [0,0,0]
        },
        {
          rgb: [255,255,255]
        },
        {
          rgb: [45,170,215]
        }
      ]
}

let appState = {
    fontFamilies: {
        headers: 'Mark W01 Bold',
        body: 'Arnhem-Blond'
    },
    currentDevice: 'large',
    allFonts: [...markProProcess, ...manFonts],
    responsiveType: {
        small: [...baseFontElements],
        medium: [...baseFontElements],
        large: [...baseFontElements]
    },
    colors: color,
    allStates: [],
    activeState: 0
}

let store = createStore(styleApp, appState)

store.subscribe(() => {
  saveState(store.getState().allStates)
})


// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
		<App />
	</Provider>,
    document.getElementById('app'));
