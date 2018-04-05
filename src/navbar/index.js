import React from 'react';
import ReactDOM from 'react-dom';
import NavBarWrapper from './NavBarWrapper';

class NavBar extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<NavBarWrapper />, this);
  }
}

window.customElements.define('standard-navbar', NavBar);
