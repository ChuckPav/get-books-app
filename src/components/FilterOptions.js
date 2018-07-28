import React, { Component } from 'react';

class FilterOptions extends Component {

  handleChange(event) {
      this.props.changeFilterBy(event.target.value);
  }

  render() {
    return (
      <select id="filterBy" value={this.props.filterBy} onChange={this.handleChange.bind(this)}>
        <option value="title">Filter By Title</option>
        <option value="author">Filter By Author</option>
        <option value="year">Filter By Year</option>
        <option value="none">No Filter Selected</option>
      </select>
    );
  }
}

export default FilterOptions;