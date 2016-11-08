import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import useRelay from 'react-router-relay';
import Template from './components/Template';
import HelloWorld from './components/HelloWorld';

let RootQuery = {
  data: (Component) => Relay.QL`
    query RootQuery {
      data {
        ${Component.getFragment('data')}
      }
    }
  `
};

class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory} render={applyRouterMiddleware(useRelay)} environment={Relay.Store}>
        <Route path="/" component={Template} queries={RootQuery}>
          <IndexRoute component={HelloWorld} queries={RootQuery} />
        </Route>
      </Router>
    );
  }

}

export default App;
