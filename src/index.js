import React from 'react'
import DOM from 'react-dom'

// import Stripe from './components/stripe.jsx' (use maybe later)
// Let's keep it at one container for now.
import Container from './components/container.jsx'

export class App extends React.Component {
  render () {
    return (<div>
        <Container />
      </div>);
  }
}

DOM.render( <App />, document.querySelector('#box'));
