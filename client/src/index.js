import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import ListItem from './components/list/new-list-item';
import Signin from './components/auth/signin';
import App from './components/app';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import ListsShow from './components/list/list_items';
import ListShow from './components/list/list_show';

import reducers from './reducers';

var createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  		<Router history={browserHistory}>
  			<Route path="/" component={App}>
  				<Route path="newitem" component ={RequireAuth(ListItem)} />
  				<Route path="signin" component={Signin} /> 
  				<Route path="signout" component={Signout} />
          <Route path="signup" component={Signup} />
          <Route path="items" component={RequireAuth(ListsShow)} />
          <Route path="items/:id" component={RequireAuth(ListShow)} />
  				
  			</Route>
  		</Router>
</Provider>
  , document.querySelector('.container'));

