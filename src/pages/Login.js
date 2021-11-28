import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';
import '../CSS/login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      // get help with Renato Adorno repository => https://github.com/tryber/sd-015-a-project-trybewallet/pull/82/commits/734ed01fa7d41a92e9c0566da26a8e9b8475c985
      const { email, password } = this.state;
      const MIN_LENGHT = 6;
      const emailRegex = /\S+@\S+\.\S+/; // Source: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
      if (password.length >= MIN_LENGHT && emailRegex.test(email)) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

  render() {
    const { email, password, disabled } = this.state;
    const { history, saveEmail } = this.props;
    return (
      <div className="loginPage">
        <label htmlFor="emailId">
          <input
            type="email"
            data-testid="email-input"
            id="emailId"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Type the email"
            required
          />
        </label>
        <label htmlFor="passwordId">
          <input
            type="password"
            data-testid="password-input"
            id="passwordId"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            placeholder="Type the password"
            required
          />
        </label>
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => {
            saveEmail(email);
            history.push('/carteira');
          } }
        >
          Entrar
        </button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(login(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};
