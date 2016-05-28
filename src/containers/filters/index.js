import React, { Component, PropTypes } from 'react';
import { Input } from 'react-materialize';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: this.props.instructor || 'None',
      filter: this.props.filter || 'Show All'
    };

    this.handleChangeInstructor = this.handleChangeInstructor.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  handleChangeInstructor(e) {
    this.setState({ instructor: e.target.value });
    this.props.updateVisibility(this.state.instructor, this.state.filter);
  }

  handleChangeFilter(e) {
    this.setState({ filter: e.target.value });
    this.props.updateVisibility(this.state.instructor, this.state.filter);
  }

  render() {
    const filter = ['Show All', 'Not-Assigned', 'In-Progress', 'Not-Contacted', 'Accepted'];
    const filterOptions = filter.map(item => (<option value={item} key={item}> {item} </option>));
    const instructorOptions = this.props.instructors.map(item => item.name).map(item => (<option value={item} key={item}> {item} </option>));
    return (
      <div className="row">
        <div className="input-field col s6">
          <Input s={12} type="select" label="Choose Instructor" onChange={this.handleChangeInstructor}>
            <option>All</option>
            { instructorOptions }
          </Input>
        </div>

        <div className="input-field col s6">
          <Input s={12} type="select" label="Choose Filter" onChange={this.handleChangeFilter}>
             { filterOptions }
          </Input>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  text: PropTypes.string,
  instructors: PropTypes.array,
  filter: PropTypes.string,
  instructor: PropTypes.string,
  updateVisibility: PropTypes.func
};

export default Filters;
