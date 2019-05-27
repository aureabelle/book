import React, { Component } from 'react';
import CcfaLogo from '../../images/ccfa-logo.png';
import GgbooksLogo from '../../images/ggbooks-logo.png';
import './style.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="logo">
          <a className="ccfa-logo">
            <img src={CcfaLogo} height="45" width="244" alt="Canada Council for the Arts Logo" />
          </a>

          <a className="ggbooks-logo">
            <img src={GgbooksLogo} height="46" width="154" alt="Ggbooks Logo" />
          </a>
        </div>

        <div className="navigation">
          <h1>Governor General's Literary Awards</h1>
          <ul className="menu">
            <li className="active"><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Events</a></li>
            <li><a>Past Winners and Finalists</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
