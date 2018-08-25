import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from './Navigation.css';

export default () => (
  <Nav>
    <NavItem>
      <NavLink exact activeClassName={styles.active} tag={RouterNavLink} to="/">
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink exact activeClassName={styles.active} tag={RouterNavLink} to="/server-example">
        Server example
      </NavLink>
    </NavItem>
  </Nav>
);
