import React, { Component, PropTypes } from 'react';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  updateNotes() {
    if (this.state.text) {
      const student = this.props.data;
      student.notes.push(this.state.text);
      this.props.updateStudent(student);
      this.setState({ text: '' });
      this.forceUpdate();
    }
  }

  render() {
    const rows = this.props.data.notes.map((note, index) => (
      <li key={index}>
        <div className="collapsible-header center">Note from Lesson {index + 1}</div>
        <div className="collapsible-body"><p>{note}</p></div>
      </li>
      )
    );

    return (
      <div className="card">
        <div className="card-content black-text">
          <span className="card-title">
            Notes
            <button href="#notes" className="modal-trigger btn-floating btn-large waves-effect waves-light blue right">
              <i className="fa fa-plus"></i>
            </button>
          </span>
          <hr />
          <ul className="collapsible" data-collapsible="expandable">
            { rows }
          </ul>
        </div>
        <div id="notes" className="modal">
          <div className="modal-content">
            <h4>Notes</h4>
            <p>What do you think of the student performance today?</p>
            <textarea
              value={this.state.text}
              onChange={this.handleTextChange}
              style={{ height: 250 }}
            />
          </div>
          <div className="modal-footer">
            <a onClick={this.updateNotes} className=" modal-action modal-close waves-effect waves-blue btn-flat btn">Save</a>
            <a className=" modal-action modal-close waves-effect waves-blue btn-flat btn">Close</a>
          </div>
        </div>
      </div>
    );
  }
}

Notes.propTypes = {
  data: PropTypes.object,
  updateStudent: PropTypes.func
};

export default Notes;
