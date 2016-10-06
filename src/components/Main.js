require("normalize.css/normalize.css");
import s from "../styles/App.css";

import React from "react";

import HtmlViewerComponent from "./HtmlViewerComponent";

import FCBC from "./FontControlBoxComponent";

class AppComponent extends React.Component {

	constructor(props) {
		super(props);

    this._updateStyle = this._updateStyle.bind(this);

		this.state = {
			typeElements: {
				headers: [
					{
						name: "h1",
						size: 70,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}, {
						name: "h2",
						size: 70,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}, {
						name: "h3",
						size: 70,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}, {
						name: "h4",
						size: 70,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}, {
						name: "h5",
						size: 70,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}, {
						name: "h6",
						size: 70,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}
				],
				"body": [
					{
						name: "p",
						size: 14,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}, {
						name: "li",
						size: 14,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}, {
						name: "small",
						size: 14,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}, {
						name: "pre",
						size: 14,
						lineHeight: 1.25,
						kearning: 0,
						marginAfter: 0
					}
				]
			}
		}
	}


  _updateStyle(props) {
    let newState = Object.assign({}, this.state)
    newState.typeElements.headers[props.index] = props
    this.setState(newState)
  }

  render() {

    let style = ""
    return (
      <div className={ s.index }>

      <style>{style}</style>

        <div className={s.controller}>
          {this.state.typeElements.headers.map((el, index) => {
        	 return <FCBC key={ index } {...el} index={index} handleClick={this._updateStyle} />
          })}
        </div>

        <HtmlViewerComponent />

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
