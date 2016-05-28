import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import './style.scss';
import { signupUser } from '../../actions/login.js';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.user.isAuthenticated) {
      this.context.router.push('/dashboard');
    }
  }

  componentWillReceiveProps(props) {
    if (props.user.isAuthenticated) {
      this.context.router.push('/dashboard');
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const creds = {
      email: this.props.data.email.value || null,
      pass: this.props.data.pass.value || null,
      name: this.props.data.name.value || null
    };

    this.props.signupUser(creds);
  }

  render() {
    const { fields: { email, pass, pass2, name }, user, resetForm, submitting } = this.props;
    return (
        <div className="middle valign-wrapper">
          <form className="login-form" onSubmit={this.onSubmit}>
            <div className="error-message center">{user.message}
              {email.touched && email.error && <div>{email.error}</div>}
              {pass.touched && pass.error && <div>{pass.error}</div>}
            </div>

            <div className="input-field">
              <input type="text" className="validate form-control" {...name} />
              <label>Name</label>
            </div>

            <div className="input-field">
              <input type="text" className="validate form-control" {...email} />
              <label>Email</label>
            </div>

            <div className="input-field">
              <input type="password" className="validate form-control" {...pass} />
              <label>Password</label>
            </div>

            <div className="input-field">
              <input type="password" className="validate form-control" {...pass2} />
              <label>Confirm Password</label>
            </div>
            <div className="center-align login-buttons">
            <button onClick={this.onSubmit} disabled={email.error || pass.error} className="btn waves-effect waves-light">
              Signup
            </button>
            <button onClick={resetForm} disabled={submitting} className="btn waves-effect waves-light">
              Clear
            </button>
            </div>
          </form>
        </div>
    );
  }
}

Signup.contextTypes = {
  router: PropTypes.object.isRequired
};

Signup.propTypes = {
  fields: PropTypes.object,
  data: PropTypes.object,
  resetForm: PropTypes.func,
  loginUser: PropTypes.func,
  dispatch: PropTypes.func,
  onSignup: PropTypes.func,
  signupUser: PropTypes.func,
  user: PropTypes.object,
  submitting: PropTypes.bool
};

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.name) {
    errors.name = 'name Required';
  } else if (!/([a-zA-Z]+)\w+/g.test(values.name)) {
    errors.email = 'Must be a valid name';
  } else if (values.name.length < 3) {
    errors.pass = 'Has to be atleast 3 characters';
  }

  if (!values.pass) {
    errors.pass = 'Password Required';
  } else if (values.pass.length < 6) {
    errors.pass = 'Has to be atleast 6 characters';
  } else if (values.pass !== values.pass2) {
    errors.pass = 'Passwords should MATCH';
  }

  return errors;
};

function mapStateToProps(state) {
  return {
    data: state.form.signup,
    user: state.user
  };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'name', 'pass', 'pass2'],
  validate
}, mapStateToProps, { signupUser })(Signup);
