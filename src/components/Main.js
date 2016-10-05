require("normalize.css/normalize.css");
import s from "styles/App.css";

import React from "react";

class AppComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			"typeElements": [
				"headers": [
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
				],
			]
		}
	}

  render() {
    return (
      <div className={ s.index }>
        {this.state.typeElements.headers.map((el, index) => {
        	return <div key={ index }><strong>{ el.name }</strong></div>
        })}
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
