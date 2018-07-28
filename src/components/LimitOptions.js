import React, { Component } from 'react';

class LimitOptions extends Component {

  handleChange(event) {
    this.props.changeLimit(event.target.value);
  }  

  render() {
    return (
      <div>
        <p>Limit:</p>
        <select id="limit" value={this.props.limit} onChange={this.handleChange.bind(this)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="0">No Limit</option>
        </select>
      </div>
    );
  }
}

export default LimitOptions;