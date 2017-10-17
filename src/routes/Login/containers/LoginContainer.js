import React from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import LoginView from '../components/LoginView'
import {
  loginAsync
} from '../../../modules/session'


const mapStateToProps = (state) => ({
  session: state.session
})

const mapActionCreators = {
  loginAsync
}

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.onLoginChangeHandler = this.onLoginChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
  }

  /**
   * При переходе по линку
   */
  componentWillMount() {
    if (!this.props.session.isNotLoggedIn) {
      browserHistory.push('/')
    }
  }

  /**
   * Для обработки изменений, произошедших в сторе
   * @param nextProps следующие пропсы
   */
  componentWillReceiveProps(nextProps) {
    if (!nextProps.session.isNotLoggedIn) {
      browserHistory.push('/')
    }
  }

  /**
   * Отправка формы
   *
   * @param {object} событие
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    const email = this.state.user.email
    const password = this.state.user.password

    const validateResults = this.validateForm(email, password)

    if (!validateResults.success) {
      this.setState({errors: validateResults.errors})
    } else {
      this.props.loginAsync({user: email, password: password})
    }
  }

  /**
   * Валидация формы
   * @param {string} email
   * @param {string} password
   * @returns {{success: boolean, message: string, errors: {}}}
   */
  validateForm(email, password) {
    const errors = {}
    let isFormValid = true
    let message = ''

    if (email.length === 0) {
      isFormValid = false
      errors.email = 'Пожалуйста, введите Email'
    }

    if (password.length === 0) {
      isFormValid = false
      errors.password = 'Пожалуйста, введите пароль'
    }

    if (!isFormValid) {
      message = 'Проверьте правильность заполнения формы входа'
    }

    return {
      success: isFormValid,
      message,
      errors
    }
  }

  /**
   * Обработчик изменения в поле логин
   *
   * @param {object} событие
   */
  onLoginChangeHandler(event) {
    const value = event.target.value
    this.changeUserFields('email', value)

    if (this.state.errors.email !== '' && value.length !== 0 ) {
      this.setState({errors: {email: '', password: this.state.errors.password}})
    }
  }

  /**
   * Обработчик изменения в поле пароль
   *
   * @param event
   */
  onPasswordChangeHandler(event) {
    const value = event.target.value
    this.changeUserFields('password', value)

    if (this.state.errors.password !== '' && event.target.value.length !== 0 ) {
      this.setState({errors: {password: '', email: this.state.errors.email}})
    }
  }

  /**
   * Изменить поле ввода
   *
   * @param {string} имя поля
   */
  changeUserFields(fieldName, fieldValue) {
    const user = this.state.user;
    user[fieldName] = fieldValue;

    this.setState({
      user
    });
  }

  render() {
    return (
      <div>
        <LoginView
          onSubmit={this.processForm}
          onLoginChange={this.onLoginChangeHandler}
          onPasswordChange={this.onPasswordChangeHandler}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapActionCreators)(LoginPage)