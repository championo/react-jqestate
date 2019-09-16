import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = ({ children }) => (
  <footer className="page-footer ">
    <div className="container">{children}</div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
