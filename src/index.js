import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import store from './redux/store';

import App from './App';

const rootElement = document.getElementById('root');
const about = () => <h1>About page</h1>;
const notfound = () => <h1>Not found</h1>;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={about} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  rootElement,
);


// <Route component={notfound} />

/*
 <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/some">Some</Link>
      </li>
    </ul>

*/