import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input } from 'react-materialize';


import { addStudent } from '../../actions/index';

class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeInstructor = this.handleChangeInstructor.bind(this);
    this.state = {
      instructor: this.props.instructor || 'None',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const student = { name: this.props.data.name.value, email: this.props.data.email.value, instructor: this.state.instructor };
    this.props.addStudent(student);
    this.props.resetForm();
    this.context.router.push('/dashboard');
  }

  handleChangeInstructor(e) {
    this.setState({ instructor: e.target.value });
  }

  render() {
    const instructorOptions = this.props.instructors.map(item => item.name).map(item => (<option value={item} key={item}> {item} </option>));
    const { fields: { name, email } } = this.props;
    return (
      <div className="row add-student-form">
        <form className="col s12" onSubmit={this.onSubmit} >
        <div className="error-message center">
          {email.touched && email.error && <div>{email.error}</div>}
          {name.touched && name.error && <div>{name.error}</div>}
        </div>
          <div className="row">
            <div className="divider"></div>
            <div className="input-field col s6 offset-s3">
              <input type="text" className="validate form-control" {...name} />
              <label htmlFor="icon_prefix">Name</label>
            </div>
            <div className="input-field col s6 offset-s3">
              <input type="text" className="validate form-control" {...email} />
              <label htmlFor="icon_telephone">Email</label>
            </div>
            <div className="input-field col s6 offset-s3">
              <Input s={12} type="select" label="Choose Instructor" onChange={this.handleChangeInstructor} >
                <option>None</option>
                { instructorOptions }
              </Input>
            </div>
          </div>
          <button className="btn waves-effect waves-light col s6 offset-s3" type="submit">
            Submit
            <i className="fa fa-info fa-2x fa-spin right"></i>
          </button>
        </form>
      </div>
    );
  }
}

NewStudent.contextTypes = {
  router: PropTypes.object.isRequired
};

NewStudent.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  data: PropTypes.object,
  addStudent: PropTypes.func,
  resetForm: PropTypes.func,
  instructors: PropTypes.array,
  instructor: PropTypes.string
};

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.name) {
    errors.name = 'Name Required';
  } else if (!/([a-zA-Z]+)\w+/g.test(values.name)) {
    errors.email = 'Must be a valid name';
  } else if (values.name.length < 3) {
    errors.pass = 'Has to be atleast 3 characters';
  }

  return errors;
};


function mapStateToProps(state) {
  return {
    data: state.form.NewStudent,
    instructors: state.instructors.instructors
  };
}

export default reduxForm({
  form: 'NewStudent',
  fields: ['name', 'email'],
  validate
}, mapStateToProps, { addStudent })(NewStudent);
