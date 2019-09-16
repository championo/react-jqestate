import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from 'components/layout/Footer';

const reactMessage = 'Hello React!';

const App = ({ storeMessage }) => (
  <>
    <main className="page-content">
      <div className="container">
        <p className="hello">{reactMessage}</p>
        {storeMessage ? <p className="hello">{storeMessage}</p> : null}
      </div>
    </main>
    <Footer>
      <div className="footer__text">JQ Estate @ 2019</div>
    </Footer>
  </>
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
