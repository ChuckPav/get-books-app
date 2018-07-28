import React, { Component } from 'react';

class SortOptions extends Component {

  handleChange(event) {
    this.props.changeSortBy(event.target.value);
  }  

  render() {
    return(
      <select id="sortBy" value={this.props.sortBy} onChange={this.handleChange.bind(this)}>
        <option value="titleAsc">Title (Ascending)</option>
        <option value="titleDesc">Title (Descending)</option>
        <option value="authorAsc">Author (Ascending)</option>
        <option value="authorDesc">Author (Descending)</option>
        <option value="yearAsc">Year (Ascending)</option>
        <option value="yearDesc">Year (Descending)</option>
        <option value="none">No Sort Selected</option>
      </select>
    );
  }
}

export default SortOptions;