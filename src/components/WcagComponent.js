/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

 import React from 'react';

 function Status(props) {
 	let statusIcon;
 	if (props.status == true) {
 		statusIcon = <span>ok</span>;
 	} else {
 		statusIcon = <span>no</span>;
 	}
 	return (statusIcon)
 }

 class WCAG extends React.Component {

 	constructor(props) {
 		super(props);

 		this.state = {
 			brightness: 1000,
 			color: 1000,
 			contrast: 1000,
 			complaint: false,
 			aa_compliant: false,
 			aa_18_compliant: false,
 			aaa_compliant: false,
 			aaa_18_compliant: false,
 			foreground: {r: 0, g: 0, b:0},
 			initForeground: {r: 0, g: 0, b:0}
 		}

 		this.reset = this.reset.bind(this);
 		this.changeValue = this.changeValue.bind(this);
 	}


 	static hexToRgb = hex => {

 		const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
 		hex = hex.replace(shorthandRegex, function(m, r, g, b) {
 			return r + r + g + g + b + b;
 		});

 		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
 		return result ? {
 			r: parseInt(result[1], 16),
 			g: parseInt(result[2], 16),
 			b: parseInt(result[3], 16)
 		} : null;
 	}

 	static hexColorDifference = (foreground, background) => {

 		let fg = WCAG.hexToRgb(foreground);
 		let bg = WCAG.hexToRgb(background);

 		let colorDifference = ((Math.max (fg.r, bg.r) - Math.min (fg.r, bg.r)) + (Math.max (fg.g, bg.g) - Math.min (fg.g, bg.g)) + (Math.max (fg.b, bg.b) - Math.min (fg.b, bg.b)));

 		return colorDifference >= 500

 	}

 	static hexBrightnessDifference = (foreground, background) => {

 		let fg = WCAG.hexToRgb(foreground);
 		let bg = WCAG.hexToRgb(background);

 		let bY = ((bg.r * 299) + (bg.g * 587) + (bg.b * 114)) / 1000;
 		let fY = ((fg.r * 299) + (fg.g * 587) + (fg.b * 114)) / 1000;

 		let brightnessDifference = Math.round(Math.abs(bY-fY));

 		return brightnessDifference >= 125;

 	}

 	static hexColorCompliance = (brightDif, colorDif) => {
 		let brightnessThreshold = 125;
 		let colorThreshold = 500;

 		return ((brightDif >= brightnessThreshold) && (colorDif >= colorThreshold))

 	}

 	static hexColorContrast = (foreground, background) => {

 		let fg, bg;

 		if ( typeof(foreground) === 'object') {
 			fg = foreground
 		} else {
 			fg = WCAG.hexToRgb(foreground)
 		}

 		if ( typeof(background) === 'object') {
 			bg = background;
 		} else {
 			bg = WCAG.hexToRgb(background)
 		}


 		let ratio = 1;
 		let l1 = WCAG.hexGetLuminance([fg.r/255, fg.g/255, fg.b/255]);
 		let l2 = WCAG.hexGetLuminance([bg.r/255, bg.g/255, bg.b/255]);

 		if (l1 >= l2) {
 			ratio = (l1 + .05) / (l2 + .05);
 		} else {
 			ratio = (l2 + .05) / (l1 + .05);
 		}
 		ratio = Math.round(ratio * 100) / 100;

 		return ratio;

 	}

 	static hexGetLuminance = (rgb) => {

 		for (let i =0; i<rgb.length; i++) {

 			if (rgb[i] <= 0.03928) {
 				rgb[i] = (rgb[i] / 12.92);
 			} else {
 				rgb[i] = Math.pow(((rgb[i]+0.055)/1.055), 2.4 );
 			}

 		}

 		let l = (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]);
 		return l;

 	}



 	static aa = (foreground, background) => {
 		let ratio = WCAG.hexColorContrast(foreground,background);
 		return (ratio >= 4.5)
 	}

 	static aa_18 = (foreground, background) => {
 		let ratio = WCAG.hexColorContrast(foreground,background);
 		return (ratio >= 3)
 	}

 	static aaa = (foreground, background) => {
 		let ratio = WCAG.hexColorContrast(foreground,background);
 		return (ratio >= 7)
 	}

 	static aaa_18 = (foreground, background) => {
 		let ratio = WCAG.hexColorContrast(foreground,background);
 		return (ratio >= 4.5)
 	}

 	changeValue(e) {
 		let foreground = this.state.foreground;
 		foreground[e.target.name] = e.target.value;
 		this.setState({
 			foreground: foreground
 		})
 	}

 	componentWillMount() {

 		let fg = this.props.foreground;
 		let bg = this.props.background;

 		let brightnessDifference =	WCAG.hexBrightnessDifference(fg, bg);
 		let colorDifference =		WCAG.hexColorDifference(fg, bg);
 		let colorCompliance =		WCAG.hexColorCompliance(brightnessDifference,colorDifference);
 		let ratio =					WCAG.hexColorContrast(fg,bg);


 		let newResults = {
 			brightness: brightnessDifference,
 			color: colorDifference,
 			contrast: ratio,
 			compliant: colorCompliance,
 			aa_compliant: WCAG.aa(fg,bg),
 			aa_18_compliant: WCAG.aa_18(fg,bg),
 			aaa_compliant: WCAG.aaa(fg,bg),
 			aaa_18_compliant: WCAG.aaa_18(fg,bg),
 			foreground: WCAG.hexToRgb(fg),
 			initForeground: WCAG.hexToRgb(fg)
 		}

 		this.setState(newResults);
 	}

 	reset(e) {
 		e.preventDefault();
 		this.setState({foreground: WCAG.hexToRgb(this.props.foreground)})
 	}

 	render() {
 		return (
 			<div className='row WCAG'>
 			<div className='col-xs-12'>
 			<ul>
 			<li>
 			<small>Brightness Difference (>=125)</small>
 			<p>{this.state.brightness}</p>
 			</li>
 			<li>
 			<small>Color Difference (>=500)</small>
 			<p>{this.state.color}</p>
 			</li>
 			<li>
 			<small>Contrast Ratio</small>
 			<p>{this.state.contrast}:1</p>
 			</li>
 			<li>
 			<small>Color Compliant</small>
 			<p><Status status={this.state.compliant} /></p>
 			</li>
 			<li>
 			<small>WCAG 2 AA (>4.5)</small>
 			<p><Status status={this.state.aa_compliant} /></p>
 			</li>
 			<li>
 			<small>WCAG 2 AA +18pt (>3)</small>
 			<p><Status status={this.state.aa_18_compliant} /></p>
 			</li>
 			<li>
 			<small>WCAG 2 AAA (>7)</small>
 			<p><Status status={this.state.aaa_compliant} /></p>
 			</li>
 			<li>
 			<small>WCAG 2 AAA +18pt (>4.5)</small>
 			<p><Status status={this.state.aaa_18_compliant} /></p>
 			</li>
 			</ul>
 			</div>
 			<div className='col-xs-12 colorAdjust'>
 			<div className='row'>
 			<div className='col-xs-12 col-md-6'>
 			<input type='range' min='0' max='255' name='r' value={this.state.foreground.r} onChange={this.changeValue} />
 			<input type='range' min='0' max='255' name='g' value={this.state.foreground.g} onChange={this.changeValue} />
 			<input type='range' min='0' max='255' name='b' value={this.state.foreground.b} onChange={this.changeValue} />
 			<a href='/' onClick={this.reset}>Reset</a>
 			</div>
 			<div className='col-xs-12 col-md-6 bricks'>
 			<div className='row' style={{marginRight:0}}>
 			<div className='col-md-6' style={{background:this.props.foreground}}>
 			<p>{ (WCAG.aa(this.state.initForeground, this.props.background) == true) ? 'AA' : 'X'}</p>
 			<p>rgb:<br/> {`${this.state.initForeground.r}, ${this.state.initForeground.g}, ${this.state.initForeground.b}`}</p>
 			</div>
 			<div className='col-md-6' style={{
 				background:`rgb(${this.state.foreground.r},${this.state.foreground.g},${this.state.foreground.b})`}}>
 				<p>{ (WCAG.aa(this.state.foreground, this.props.background) == true) ? 'AA' : 'X'}</p>
 				<p>rgb:<br/> {`${this.state.foreground.r}, ${this.state.foreground.g}, ${this.state.foreground.b}`}</p>
 				</div>
 				</div>
 				</div>
 				</div>

 				</div>
 				</div>
 				);
 			}
 		}



 			export default WCAG;
