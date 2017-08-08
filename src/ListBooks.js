import React from 'react';
import './App.css'
import Book from './Book';

class ListBooks extends React.Component{
	render() {
		const {title, shelf, books} = this.props;

		let filteredBooks = books.filter( (book) => book.shelf === shelf)
		return(

	        <div className="bookshelf">
	          <h2 className="bookshelf-title">{title}</h2>
	          <div className="bookshelf-books">
	            <ol className="books-grid">
	            	{filteredBooks.map((book) => (
		              <li key={book.id}>
		                <Book book_data={book}/>
		              </li>
		             ))}
	            </ol>
	          </div>
	        </div>

		)
	}

}

export default ListBooks;