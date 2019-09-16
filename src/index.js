import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TopNavBar from 'components/layout/TopNavBar';
import Header from 'components/layout/Header';

import store from './redux/store';
import App from './App';

const rootElement = document.getElementById('root');
const about = () => <h1>About page</h1>;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header>
        <TopNavBar />
      </Header>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={about} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  rootElement,
);
