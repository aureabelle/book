import React, { Component } from 'react';
import EventsImage from '../../images/book-apple.jpg';
import PhotosImage from '../../images/book-coffee.jpg';
import './style.scss';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="content">
          <p>Les Prix litteraires du Gouverneur general recompensent des grands livres canadiens. Les 14 gagnants dans les deux langues et les 7 categories refletent bien la grande diversite du Canada. Celebrez avec nous la litterature d'ici.</p>

          <div className="cta-list">
            <a className="cta events" style={{ backgroundImage: `url(${EventsImage})`}}>
              <span className="name">GGBooks Events</span>
              <span className="details">The GGBooks events across Canada</span>
            </a>

            <a className="cta photos" style={{ backgroundImage: `url(${PhotosImage})`}}>
              <span className="name">GGBooks Photos</span>
              <span className="details">The GGBooks events in pictures</span>
            </a>

            <a className="cta social">
              <span className="name">#ggbooks</span>
              <span className="details">Curated quotes and social media messages</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
