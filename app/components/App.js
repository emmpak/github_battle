var React = require('react');
var Popular = require('./Popular');

class App extends React.Component {
  render() {
    return (
      <div>
        <Popular />
      </div>
  )
  }
}

// Common JS
module.exports = App;
