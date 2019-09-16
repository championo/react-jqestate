import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderLogo from 'components/layout/HeaderLogo';
import './style.scss';

const TopNavBar = () => (
  <nav>
    <ul className="nav-list">
      <li className="nav-list__item">
        <NavLink exact to="/" className="nav-item__link">
          <HeaderLogo />
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink to="/sale" className="nav-item__link" activeClassName="nav-item__link_active">
          Sale
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink to="/rent" className="nav-item__link" activeClassName="nav-item__link_active">
          Rent
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink to="/villages" className="nav-item__link" activeClassName="nav-item__link_active">
          Villages
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink to="/about" className="nav-item__link" activeClassName="nav-item__link_active">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default TopNavBar;
