import React, { Component } from 'react';
import { Icon } from 'antd';
import MainBannerImage from '../../images/published-blocks.jpg';
import './style.scss';

class MainBanner extends Component {
  constructor(props) {
    super(props);

    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(event) {
    const search = document.getElementById("search");
    event.preventDefault();
    search.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className="main-banner" style={{ backgroundImage: `url(${MainBannerImage})` }}>
        <div className="content">
          <h2>Voici les gagnants et les finalistes des 2017!</h2>
          <a className="arrow" href="#search" onClick={this.handleArrowClick}>
            <Icon type="arrow-down" />
          </a>
        </div>
      </div>
    );
  }
}

export default MainBanner;
