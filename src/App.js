import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  
  state = {
    books: []
  }

  changeShelves = (newShelf, bookId) => {
    console.log(newShelf + ' ' + bookId);
    console.log(this.state.books);
    
    BooksAPI.update(bookId, newShelf).then((books) => {
        BooksAPI.getAll().then( (books) => {
        this.setState({ books })
      })
    })

    console.log(this.state.books)
    console.log('shelf updated!')
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books })
    })
  }

  render() {
    const { books } = this.state
    let readBooks = books.filter( (book) => book.shelf === 'read')
    let wantBooks = books.filter( (book) => book.shelf === 'wantToRead')
    let currentBooks = books.filter( (book) => book.shelf === 'currentlyReading')
    return (
      <div className="app">
        <Route path='/search' render={({ history })=>(
        
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => { history.push('/') }}>Close</a>
              <div className="search-books-input-wrapper">
                {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}/>
        <Route exact path='/' render={ ({ history }) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ListBooks title="Currently Reading" shelf="currentlyReading" books={currentBooks} shelvesChanged={this.changeShelves}/>
                <ListBooks title="Want to Read" shelf="wantToRead" books={wantBooks} shelvesChanged={this.changeShelves}/>
                <ListBooks title="Read" shelf="read" books={readBooks} shelvesChanged={this.changeShelves}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => { history.push('/search') }}>Add a book</a>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
