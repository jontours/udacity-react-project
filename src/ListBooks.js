import React from 'react';
import './App.css'
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class ListBooks extends React.Component{

	render() {
		const {title, shelf, books, shelvesChanged} = this.props;

		return(

	        <div className="bookshelf">
	          <h2 className="bookshelf-title">{title}</h2>
	          <div className="bookshelf-books">
	            <ol className="books-grid">
	            	{books.map((book) => (
		              <li key={book.id}>
		                <Book book_data={book} onChangeShelf={shelvesChanged}/>
		              </li>
		             ))}
	            </ol>
	          </div>
	        </div>

		)
	}

}

export default ListBooks;