import React, { Component } from 'react';
import logo from './img/roundbook.png';
import './css/App.css';
import BookDisplay from './components/BookDisplay';
import FilterOptions from './components/FilterOptions';
import SortOptions from './components/SortOptions';
import LimitOptions from './components/LimitOptions';
import FilterInput from './components/FilterInput';

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

  /**
   * 
   * @param {String} value 
   */
  changeFilterBy(value) {
    this.setState({filterBy: value});
  }

  /**
   * 
   * @param {String} value 
   */
  changeFilterValue(value) {
    this.setState({filterValue: value});
  }

  /**
   * 
   * @param {String} value 
   */
  changeSortBy(value) {
    this.setState({sortBy: value});
  }

  /**
   * 
   * @param {String} value 
   */
  changeLimit(value) {
    // Have to parse into int because setting value via select always casts to string
    const limit = parseInt(value)
    this.setState({ limit });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Check Out These Books!</h1>
        </header>
        <p>Filter And Sorting Options:</p>
        <FilterOptions filterBy={this.state.filterBy} changeFilterBy={this.changeFilterBy} />
        <SortOptions sortBy={this.state.sortBy} changeSortBy={this.changeSortBy} />
        {this.state.filterBy === 'none' ? (
          <LimitOptions limit={this.state.limit} changeLimit={this.changeLimit} />
        ) : (
          <FilterInput filterValue={this.state.filterValue} changeFilterValue={this.changeFilterValue}/>
        )}
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
