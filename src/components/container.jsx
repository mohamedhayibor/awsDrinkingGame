import React from 'react'

export default class Container extends React.Component {

  render() {
    const styles = {
    	"width": "30%",
    	"background": "purple",
    	"paddingBottom": "30%",
    	"float": "left",
    	"margin": "1.66%",
    };

    return (<div>
        <div style={ styles }> </div>
        <div style={ styles }> </div>
        <div style={ styles }> </div>
        <div style={ styles }> </div>
        <div style={ styles }> </div>
        <div style={ styles }> </div>
      </div>);
  }
}
