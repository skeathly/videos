import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  handleChange = ev => {
    this.setState({ term: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='videoSearch'>Video Search</label>
            <input
              id='videoSearch'
              type='text'
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
