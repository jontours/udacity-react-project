import React from 'react';
import './App.css'
import Book from './Book';

class ListBooks extends React.Component{
	render() {
		const {title, books} = this.props;
		return(
	        <div className="bookshelf">
	          <h2 className="bookshelf-title">{title}</h2>
	          <div className="bookshelf-books">
	            <ol className="books-grid">
	              <li>
	                <Book/>
	              </li>
	              <li>
	                <Book/>
	              </li>
	            </ol>
	          </div>
	        </div>

		)
	}

}

export default ListBooks;