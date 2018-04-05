import React from 'react';

const NavBarItem = ({
  active,
  label,
  href
}) => {
  const activeClass = active ? 'active' : '';

  return <li className={`nav-item ${activeClass}`}>
    <a className="nav-link" href={href}>{label}</a>
  </li>
};

export default NavBarItem;