import React, { Component } from 'react';
import { Drawer, Icon } from 'antd';
import './style.scss';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showDrawer(){
    this.setState({
      visible: true,
    });
  };

  onClose(){
    this.setState({
      visible: false,
    });
  };

  render() {
    const { book, baseUrl, baseWidth, baseHeight, category } = this.props;

    const { visible } = this.state;

    const content = (
      <div className="book-info">
        {book.place === 0 && <span className="book-winner">&#9733; <strong>Winner</strong> &#9733;</span>}
        <span className="book-image" style={{ backgroundImage: `url(${baseUrl}${category}/${book.imageSrc})`}} />
        <h6>{book.title}</h6>
        {book.category === 'translation' ?
          <span className="book-translator">{book.author}</span>
        :
          <span className="book-author">{book.author}</span>
        }

        <span className="book-pub-dis">{book.publisher} - {book.distributor === book.publisher ? 'distributed by the publisher' : book.distributor}</span>
        <span className="book-isbn">{book.isbn}</span>

        {book.category === 'translation' &&
          <div className="book-original">
            <span className="book-title">{book.original.title}</span>
            <span className="book-author">{book.original.author}</span>
            <span className="book-pub-dis">{book.original.publisher}</span>
          </div>
        }

        {book.sypnosis !== '' &&
          <div className="book-sypnosis">
            <h6>Sypnosis</h6>
            <p>{book.sypnosis}</p>
          </div>
        }
      </div>
    );

    return (
      <div className={`book book-placement-${book.place}`}>
        <div className="book-details">
          <img src={`${baseUrl}${category}/${book.imageSrc}`} height={baseHeight} width={baseWidth} alt={book.title} />
          {book.place === 0 && <span className="book-winner">&#9733; <strong>Winner</strong> &#9733;</span>}
          <a className="book-trigger" onClick={this.showDrawer}>
            <Icon type="plus-circle" />
          </a>
        </div>

        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
          width={320}
        >
          {content}
        </Drawer>
      </div>
    );
  }
}

export default Book;
