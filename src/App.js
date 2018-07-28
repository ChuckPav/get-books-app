import React, { Component } from 'react';
import logo from './roundbook.png';
import './App.css';
import BookDisplay from './components/BookDisplay'

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      filterBy: 'none',
      filterValue: '',
      sortBy: 'none',
      limit: 0
    };

    this.changeFilterBy = this.changeFilterBy.bind(this);
    this.changeFilterValue = this.changeFilterValue.bind(this);
    this.changeSortBy = this.changeSortBy.bind(this);
    this.changeLimit = this.changeLimit.bind(this);
  }

  componentDidMount() {
    fetch('https://servicepros-test-api.herokuapp.com/api/v1/books')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({books: data});
      });
  }

  changeFilterBy(event) {
    this.setState({filterBy: event.target.value});
  }

  changeFilterValue(event) {
    this.setState({filterValue: event.target.value});
  }

  changeSortBy(event) {
    this.setState({sortBy: event.target.value});
  }

  changeLimit(event) {
    const limit = parseInt(event.target.value)
    this.setState({ limit });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Check Out These Books!</h1>
        </header>
        <div>
          
          <p>Filter And Sorting Options:</p>
          <select id="filterBy" onChange={this.changeFilterBy} value={this.state.filterBy}>
            <option value="title">Filter By Title</option>
            <option value="author">Filter By Author</option>
            <option value="year">Filter By Year</option>
            <option value="none">No Filter Selected</option>
          </select>
          <select id="sortBy" onChange={this.changeSortBy} value={this.state.sortBy}>
            <option value="titleAsc">Title (Ascending)</option>
            <option value="titleDesc">Title (Descending)</option>
            <option value="authorAsc">Author (Ascending)</option>
            <option value="authorDesc">Author (Descending)</option>
            <option value="yearAsc">Year (Ascending)</option>
            <option value="yearDesc">Year (Descending)</option>
            <option value="none">No Sort Selected</option>
          </select>
          {this.state.filterBy !== 'none' &&
            <div>
              <p>Filter Term:</p>
              <input type="text" value={this.state.filterValue} onChange={this.changeFilterValue}/>
            </div>
          }
          { this.state.filterBy === 'none' &&
            <div>
              <p>Limit:</p>
              <select id="limit" onChange={this.changeLimit} value={this.state.limit}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="0">No Limit</option>
              </select>
            </div>
          }
        </div>
        <BookDisplay 
          books={this.state.books} 
          filterBy={this.state.filterBy} 
          filterValue={this.state.filterValue}
          sortBy={this.state.sortBy}
          limit={this.state.limit}
        />
      </div>
    );
  }
}

export default App;
