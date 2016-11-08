import React from 'react';
import Relay from 'react-relay';

class HelloWorld extends React.Component {

  render() {
    console.log('HelloWorld', this.props);
    return (
      <div>
        Hello, World!
      </div>
    );
  }

}

export default Relay.createContainer(HelloWorld, {
  initialVariables: {},
  fragments: {
    data: () => Relay.QL`
      fragment on Data {
        id
        example
      }
    `
  }
});
