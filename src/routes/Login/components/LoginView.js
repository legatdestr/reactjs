import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginView = ({
 onSubmit,
 onLoginChange,
 onPasswordChange,
 errors,
 user
}) => (
  <div className="container">
    <Card className="card-custom">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Авторизация</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <TextField
            floatingLabelText="Email"
            name="email"
            errorText={errors.email}
            onChange={onLoginChange}
            value={user.email}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onPasswordChange}
            errorText={errors.password}
            value={user.password}
          />
        </div>

        <div className="button-line">
          <RaisedButton type="submit" label="Войти" primary />
        </div>

        <CardText>У Вас нет аккаунта? <Link to={'/signup'}>Создать аккаунт</Link></CardText>
      </form>
    </Card>
  </div>
);

LoginView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onLoginChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginView;