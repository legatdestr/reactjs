import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const LoginView = ({
 onSubmit,
 onChange,
 errors,
 user
}) => (
  <div className="container">
    <div></div>
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <input
          name="email"
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <button>Log in</button>
      </div>

      <div>Don't have an account? <Link to={'/signup'}>Create one</Link>.</div>
    </form>
  </div>
);

LoginView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginView;