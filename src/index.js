import React from 'react'
import DOM from 'react-dom'

import Stripe from './components/stripe.jsx'
import Container from './components/container.jsx'

export class App extends React.Component {
  render () {
    const containerStyles = {
    	"margin": "0 auto",
    	"maxWidth": "600px",
    };


    return (<div>
        <Stripe />
        <Container style={ containerStyles } />
      </div>);
  }
}

DOM.render( <App />, document.querySelector('#box'));
