import React, { Component } from 'react';

class FilterInput extends Component {

  handleChange(event) {
    this.props.changeFilterValue(event.target.value);
  }   

  render() {
    return (  
      <div>
        <p>Filter Term:</p>
        <input type="text" value={this.props.filterValue} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default FilterInput;