import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
          <div className="sections">
            <div className="section">
              <h6>Prize Inquiries</h6>
              <div className="contact">
                <span className="name">Lori Knoll</span>
                <span className="position">Program Officer, Prizes Section</span>
                <span className="email">
                  <a href="mailto:Lori.Knoll@canadacouncil.ca">Lori.Knoll@canadacouncil.ca</a>
                </span>
                <span className="phone">1-800-263-5588, ext. 6008 or 613-566-4414, ext. 4086</span>
              </div>
            </div>

            <div className="section">
              <h6>Media Inquiries</h6>
              <div className="contact">
                <span className="name">Jane Smith</span>
                <span className="position">Program Officer, Prizes Section</span>
                <span className="email">
                  <a href="mailto:Jane.Smith@canadacouncil.ca">Jane.Smith@canadacouncil.ca</a>
                </span>
                <span className="phone">1-800-263-5588, ext. 6008 or 613-566-4414, ext. 4086</span>
              </div>
            </div>

            <div className="section">
              <div className="cta-list">
                <a className="cta">Finalist Press Release</a>
                <a className="cta">Winners Press Release</a>
              </div>
            </div>

            <div className="section">
              <h6>Follow Us</h6>
              <div className="social">
                <a><Icon type="twitter" /></a>
                <a><Icon type="facebook" /></a>
                <a><Icon type="youtube" /></a>
                <a><Icon type="linkedin" /></a>
              </div>
              <span className="hashtag">#ggbooks</span>
            </div>
          </div>

          <p>Proactive disclosure, accessibility</p>
        </div>
      </div>
    );
  }
}

export default Footer;
