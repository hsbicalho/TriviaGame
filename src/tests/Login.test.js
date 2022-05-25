import React from 'react';
import {render, screen} from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Test Login', () => {

  beforeEach(() => {
    const { history } = renderWithRouterAndRedux(<App />);
  });

  test('01- Checks login screen inputs', () => {
    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');
    
    userEvent.type(inputName, 'Roberto');
    userEvent.type(inputEmail, 'roberto@gmail.com');

    expect(inputName).toBe('Roberto');
    expect(inputEmail).toBe('roberto@gmail.com');
  });

  test('02- Checks if the button is disabled', () => {
    const loginButton = screen.getByTestId('btn-play');
    expect(loginButton).toBeDisabled();
  });

  test('03- Checks button functionality', () => {
    
    const loginButton = screen.getByTestId('btn-play');

    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');

    expect(inputName).toBe('Roberto');
    expect(inputEmail).toBe('roberto@gmail.com');

    expect(loginButton).not.toBeDisabled();

    userEvent.click(loginButton);
    //conferir se não precisar ser async depois
    expect(history.location.pathname).toBe('/jogo');
  });
});