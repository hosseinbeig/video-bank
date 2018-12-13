import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            {' '}
            <label>Video Bank</label>
            <div className="ui sarch">
              <div className="ui icon input">
                <input
                  className="prompt"
                  placeholder="Search Here "
                  type="text"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
                <i className="video icon" />
                <i style={{ marginRight: '20px' }} className="search icon" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
