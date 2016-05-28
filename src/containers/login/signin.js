import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../../actions/login.js';
import './style.scss';

class Login extends Component {
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
      pass: this.props.data.pass.value || null

    };

    this.props.loginUser(creds);
  }

  render() {
    const { fields: { email, pass }, user, resetForm, submitting } = this.props;
    return (
        <div className="middle valign-wrapper">
          <form className="login-form" onSubmit={this.onSubmit}>
            <div className="error-message center">{user.message}
              {email.touched && email.error && <div>{email.error}</div>}
              {pass.touched && pass.error && <div>{pass.error}</div>}
            </div>
            <div className="input-field">
              <input type="text" className="validate form-control" {...email} />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field">
              <input type="password" className="validate form-control" {...pass} />
              <label htmlFor="icon_telephone">Password</label>
            </div>
            <div className="center-align login-buttons">
            <button onClick={this.onSubmit} disabled={email.error || pass.error} className="btn waves-effect waves-light">
              Login
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

Login.contextTypes = {
  router: PropTypes.object.isRequired
};

Login.propTypes = {
  fields: PropTypes.object,
  data: PropTypes.object,
  resetForm: PropTypes.func,
  loginUser: PropTypes.func,
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

  if (!values.pass) {
    errors.pass = 'Password Required';
  } else if (values.pass.length < 6) {
    errors.pass = 'Has to be atleast 6 characters';
  }

  return errors;
};

function mapStateToProps(state) {
  return {
    data: state.form.login,
    user: state.user
  };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'pass'],
  validate
}, mapStateToProps, { loginUser })(Login);
