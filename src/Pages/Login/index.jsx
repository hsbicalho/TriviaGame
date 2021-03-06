import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../trivia.png';
import './Login.css';
import { fetchToken } from '../../Services/FetchToken';
import { setPlayer } from '../../redux/actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      isButtonDisabled: true,
    };
  }

    handleInputChange = ({ target: { name, value } }) => {
      this.setState(
        () => ({ [name]: value }),
        () => this.validateInputs(),
      );
    }

    validateInputs = () => {
      const { userEmail, userName } = this.state;
      const isInputTrue = (userEmail && userName);
      this.setState({
        isButtonDisabled: !isInputTrue,
      });
    }

    handlePlayClick = async () => {
      const { history } = this.props;
      const { token } = await fetchToken();
      localStorage.setItem('token', token);
      const { logUser } = this.props;
      logUser(this.state);
      history.push('/jogo');
    }

    render() {
      const { userName, userEmail, isButtonDisabled } = this.state;
      return (
        <div
          className="login-page"
        >
          <header className="login-page-header">
            <img src={ logo } className="App-logo" alt="logo" />
            Login
            <label htmlFor="input-player-name">
              Name:
              <input
                type="text"
                name="userName"
                data-testid="input-player-name"
                value={ userName }
                onChange={ this.handleInputChange }
              />
            </label>
            <label htmlFor="input-gravatar-email">
              E-mail:
              <input
                type="email"
                name="userEmail"
                data-testid="input-gravatar-email"
                value={ userEmail }
                onChange={ this.handleInputChange }
              />
            </label>
            <button
              type="button"
              disabled={ isButtonDisabled }
              data-testid="btn-play"
              onClick={ this.handlePlayClick }
            >
              Play
            </button>
            <Link
              to="/configuracao"
            >
              <button
                type="button"
                data-testid="btn-settings"
              >
                Settings
              </button>
            </Link>
          </header>
        </div>
      );
    }
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  logUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logUser: ({ userEmail, userName }) => dispatch(setPlayer(userEmail, userName)),
});

export default connect(null, mapDispatchToProps)(Login);
