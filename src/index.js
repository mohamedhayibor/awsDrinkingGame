import React from 'react'
import DOM from 'react-dom'

import Container from './components/container.jsx'

export class App extends React.Component {
  render () {
    return (<div>
        <Container />
      </div>);
  }
}

DOM.render( <App />, document.querySelector('#box'));
