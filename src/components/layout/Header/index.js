import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ children }) => (
  <header className="page-header">
    <div className="container">{children}</div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
