import React, { Component } from 'react';
import data from '../../data';
import Filter from '../filter';
import Book from '../book';
import ShareThis from '../shareThis';
import './style.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: data.books,
      categories: data.categories,
      selectValue: '',
      lang: 'en'
    };

    this.handleFilterSelect = this.handleFilterSelect.bind(this);
    this.handleFilterSwitch = this.handleFilterSwitch.bind(this);
  }

  handleFilterSelect(val) {
    this.setState({
      selectValue: val
    });
  }

  handleFilterSwitch(val) {
    this.setState({
      lang: val ? 'fr' : 'en'
    });
  }

  render() {
    const { books, categories, selectValue, lang } = this.state;
    const booksFiction = lang === 'en' ? books.filter(book => book.category === 'fiction' && book.lang === 'en') : books.filter(book => book.category === 'fiction' && book.lang === 'fr');

    const booksPoetry = lang === 'en' ? books.filter(book => book.category === 'poetry' && book.lang === 'en') : books.filter(book => book.category === 'poetry' && book.lang === 'fr');

    const booksDrama = lang === 'en' ? books.filter(book => book.category === 'drama' && book.lang === 'en') : books.filter(book => book.category === 'drama' && book.lang === 'fr');

    const booksNonFiction = lang === 'en' ? books.filter(book => book.category === 'non-fiction' && book.lang === 'en') : books.filter(book => book.category === 'non-fiction' && book.lang === 'fr');

    const booksYpLitText = lang === 'en' ? books.filter(book => book.category === 'young-people-lit-text' && book.lang === 'en') : books.filter(book => book.category === 'young-people-lit-text' && book.lang === 'fr');

    const booksYpLitIllustrated = lang === 'en' ? books.filter(book => book.category === 'young-people-lit-illustrated' && book.lang === 'en') : books.filter(book => book.category === 'young-people-lit-illustrated' && book.lang === 'fr');

    const booksTranslation = lang === 'en' ? books.filter(book => book.category === 'translation' && book.lang === 'en') : books.filter(book => book.category === 'translation' && book.lang === 'fr');



    const baseUrl = lang === 'en' ? 'assets/src/images/books/en/' : 'assets/src/images/books/fr/';

    const baseWidth = '160';
    const baseHeight = '232';

    return (
      <div className="search" id="search">
        <h1>{lang === 'en' ? 'English Finalists 2017' : 'French Finalists 2017'}</h1>

        <Filter
          categories={categories}
          handleFilterSelect={this.handleFilterSelect}
          handleFilterSwitch={this.handleFilterSwitch}
          selectValue={selectValue}
          lang={lang}
        />

        <div className="books">
        {(selectValue === '' || (selectValue === 'fiction')) &&
          <div className="book-category">
            <h3>Fiction</h3>
            <div className="book-list">
              {booksFiction.sort((a, b) => a.place - b.place).map((book, index) => {
                return (
                  <Book
                    key={`book-${book.category}-${index}`}
                    book={book}
                    baseUrl={baseUrl}
                    baseWidth={baseWidth}
                    baseHeight={baseHeight}
                    category='fiction'
                  />
                );
              })}
              <div className="book book-committee">
                <h5>Comite d'evaluation par les pairs</h5>
                <ul>
                  <li>Nestor Musk</li>
                  <li>Richard Lemm</li>
                  <li>Sandy Shreve</li>
                </ul>
              </div>
            </div>
          </div>
        }

        {(selectValue === '' || (selectValue === 'poetry')) &&
          <div className="book-category">
            <h3>Poetry</h3>
            <div className="book-list">
              {booksPoetry.sort((a, b) => a.place - b.place).map((book, index) => {
                return (
                  <Book
                    key={`book-${book.category}-${index}`}
                    book={book}
                    baseUrl={baseUrl}
                    baseWidth={baseWidth}
                    baseHeight={baseHeight}
                    category='poetry'
                  />
                );
              })}
              <div className="book book-committee">
                <h5>Comite d'evaluation par les pairs</h5>
                <ul>
                  <li>Nestor Musk</li>
                  <li>Richard Lemm</li>
                  <li>Sandy Shreve</li>
                </ul>
              </div>
            </div>
          </div>
        }

        {(selectValue === '' || (selectValue === 'drama')) &&
          <div className="book-category">
            <h3>Drama</h3>
            <div className="book-list">
              {booksDrama.sort((a, b) => a.place - b.place).map((book, index) => {
                return (
                  <Book
                    key={`book-${book.category}-${index}`}
                    book={book}
                    baseUrl={baseUrl}
                    baseWidth={baseWidth}
                    baseHeight={baseHeight}
                    category='drama'
                  />
                );
              })}
              <div className="book book-committee">
                <h5>Comite d'evaluation par les pairs</h5>
                <ul>
                  <li>Nestor Musk</li>
                  <li>Richard Lemm</li>
                  <li>Sandy Shreve</li>
                </ul>
              </div>
            </div>
          </div>
        }

        {(selectValue === '' || (selectValue === 'non-fiction')) &&
          <div className="book-category">
            <h3>Non-Fiction</h3>
            <div className="book-list">
              {booksNonFiction.sort((a, b) => a.place - b.place).map((book, index) => {
                return (
                  <Book
                    key={`book-${book.category}-${index}`}
                    book={book}
                    baseUrl={baseUrl}
                    baseWidth={baseWidth}
                    baseHeight={baseHeight}
                    category='non-fiction'
                  />
                );
              })}
              <div className="book book-committee">
                <h5>Comite d'evaluation par les pairs</h5>
                <ul>
                  <li>Nestor Musk</li>
                  <li>Richard Lemm</li>
                  <li>Sandy Shreve</li>
                </ul>
              </div>
            </div>
          </div>
        }

        {(selectValue === '' || (selectValue === 'young-people-lit-text')) &&
          <div className="book-category">
            <h3>Young People's Literature - Text</h3>
            <div className="book-list">
              {booksYpLitText.sort((a, b) => a.place - b.place).map((book, index) => {
                return (
                  <Book
                    key={`book-${book.category}-${index}`}
                    book={book}
                    baseUrl={baseUrl}
                    baseWidth={baseWidth}
                    baseHeight={baseHeight}
                    category='young-people-lit-text'
                  />
                );
              })}
              <div className="book book-committee">
                <h5>Comite d'evaluation par les pairs</h5>
                <ul>
                  <li>Nestor Musk</li>
                  <li>Richard Lemm</li>
                  <li>Sandy Shreve</li>
                </ul>
              </div>
            </div>
          </div>
        }

        {(selectValue === '' || (selectValue === 'young-people-lit-illustrated')) &&
          <div className="book-category">
            <h3>Young People's Literature - Illustrated</h3>
            <div className="book-list">
              {booksYpLitIllustrated.sort((a, b) => a.place - b.place).map((book, index) => {
                return (
                  <Book
                    key={`book-${book.category}-${index}`}
                    book={book}
                    baseUrl={baseUrl}
                    baseWidth={baseWidth}
                    baseHeight={baseHeight}
                    category='young-people-lit-illustrated'
                  />
                );
              })}
              <div className="book book-committee">
                <h5>Comite d'evaluation par les pairs</h5>
                <ul>
                  <li>Nestor Musk</li>
                  <li>Richard Lemm</li>
                  <li>Sandy Shreve</li>
                </ul>
              </div>
            </div>
          </div>
        }

        {(selectValue === '' || (selectValue === 'translation')) &&
          <div className="book-category">
            <h3>Translation</h3>
            <div className="book-list">
              {booksTranslation.sort((a, b) => a.place - b.place).map((book, index) => {
                return (
                  <Book
                    key={`book-${book.category}-${index}`}
                    book={book}
                    baseUrl={baseUrl}
                    baseWidth={baseWidth}
                    baseHeight={baseHeight}
                    category='translation'
                  />
                );
              })}
              <div className="book book-committee">
                <h5>Comite d'evaluation par les pairs</h5>
                <ul>
                  <li>Nestor Musk</li>
                  <li>Richard Lemm</li>
                  <li>Sandy Shreve</li>
                </ul>
              </div>
            </div>
          </div>
        }
        </div>

        <ShareThis />
      </div>
    );
  }
}

export default Search;
