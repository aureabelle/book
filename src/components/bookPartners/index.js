import React, { Component } from 'react';
import data from '../../data';
import './style.scss';

class BookPartners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partners: data.partners
    };

  }

  render() {
    const { partners } = this.state;
    const bookPartners = partners.filter(partner => partner.type === 'book');

    return (
      <div className="book-partners">
        <h3>Lisez de grands livres </h3>
        <div className="partners">
          {bookPartners.map((partner, index) => {
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

export default BookPartners;
