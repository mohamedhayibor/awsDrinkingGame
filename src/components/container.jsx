import React from 'react'

import { images, twoDi, logoToGuess } from './api.jsx'

export default class Container extends React.Component {
	constructor(props) {
		super(props)
		this.checkAnswer = this.checkAnswer.bind(this);
	}

	checkAnswer(event) {
		if (event.target.src === logoToGuess[1]) {
			// forces complete reload of the page
			document.location.reload(true)
		} else {
			// completely removes the element from the dom
			event.target.remove();
		}
	}

  render() {
    return (<div>
			<div className="banner">
				<h1>Find the logo for: { logoToGuess[0] } </h1>
			</div>
			<div className="container">
				<div className="square"> <img src={ twoDi[0][1] } onClick={ this.checkAnswer } /> </div>
				<div className="square"> <img src={ twoDi[1][1] } onClick={ this.checkAnswer } /> </div>
				<div className="square"> <img src={ twoDi[2][1] } onClick={ this.checkAnswer } /> </div>
				<div className="square"> <img src={ twoDi[3][1] } onClick={ this.checkAnswer } /> </div>
				<div className="square"> <img src={ twoDi[4][1] } onClick={ this.checkAnswer } /> </div>
				<div className="square"> <img src={ twoDi[5][1] } onClick={ this.checkAnswer } /> </div>
			</div>
    </div>);
  }
}
