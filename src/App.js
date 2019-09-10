import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

const reactMessage = 'Hello React!';

const App = ({ storeMessage }) => (
  <div style={{ border: '1px solid red' }}>
    <p className="hello">{reactMessage}</p>
    {storeMessage ? <p className="hello">{storeMessage}</p> : null}
  </div>
);

const mapStateToProps = state => {
  return {
    storeMessage: state.message,
  };
};

export default connect(mapStateToProps)(App);

App.propTypes = {
  storeMessage: PropTypes.string.isRequired,
};
