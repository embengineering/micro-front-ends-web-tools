import React from 'react';
import NavBar from './NavBar';

class NavBarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { active: true, label: 'Tally', href: '/' },
        { active: false, label: 'Statistics', href: '/' }
      ],
      title: 'Another Tool'
    }
  }
  render() {
    return (
      <div style={{marginBottom: 15}}>
        <NavBar
          title={this.state.title}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default NavBarWrapper;