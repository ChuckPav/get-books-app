import React, { Component } from 'react';
import logo from './roundbook.png';
import './App.css';
import BookDisplay from './components/BookDisplay'

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('https://servicepros-test-api.herokuapp.com/api/v1/books')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({books: data});
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Check Out These Books!</h1>
        </header>
        <BookDisplay filteredBooks={this.state.books} />
      </div>
    );
  }
}

export default App;
