import React from 'react';
import { NavLink } from 'react-router-dom';

import profileLogo from './images/user-profile.svg';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  const activeClassName = 'active__link';

  return (
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.id}>
              {' '}
              <NavLink
                to={link.path}
                end
                className={({ isActive }) => (isActive ? activeClassName : null)}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <img src={profileLogo} className="profileLogo" alt="profile icon" />
    </nav>
  );
};

export default Navbar;
