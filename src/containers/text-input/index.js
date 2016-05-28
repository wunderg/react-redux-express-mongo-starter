import React, { Component, PropTypes } from 'react';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit() {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field col s4 offset-s4">
            <input id="search" type="text" className="validate" />
              <label htmlFor="search">Search</label>
            </div>
          </div>
        </div>
    );
  }
}

Filters.propTypes = {
  text: PropTypes.string,
};

export default Filters;
