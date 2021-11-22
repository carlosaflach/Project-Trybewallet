import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <label htmlFor="emailId">
          <input
            type="email"
            data-testid="email-input"
            id="emailId"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
      </div>);
  }
}

export default Login;
