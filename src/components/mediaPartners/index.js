import React, { Component } from 'react';
import data from '../../data';
import './style.scss';

class MediaPartners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partners: data.partners
    };

  }

  render() {
    const { partners } = this.state;
    const mediaPartners = partners.filter(partner => partner.type === 'media');

    return (
      <div className="media-partners">
        <h3>Media Partners</h3>
        <div className="partners">
          {mediaPartners.map((partner, index) => {
            return (
              <a
                className={`partner partner-${partner.tag}`}
                key={`book-partner-${index}`}
              >
                <img className="default" src={partner.srcDefault} alt={partner.name} />
                <img className="bw" src={partner.srcBw} alt={partner.name} />
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MediaPartners;
