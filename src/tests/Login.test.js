import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import Login from '../pages/Login';

describe('Test Login', () => {
  test('01- Checks login screen inputs', () => {
    renderWithRouterAndRedux(<Login />);
    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');
    
    userEvent.type(inputName, 'Roberto');
    userEvent.type(inputEmail, 'roberto@gmail.com');

    expect(inputName.value).toBe('Roberto');
    expect(inputEmail.value).toBe('roberto@gmail.com');
  });

  test('02- Checks if the button is disabled', () => {
    renderWithRouterAndRedux(<Login />);
    const loginButton = screen.getByTestId('btn-play');
    expect(loginButton).toBeDisabled();
  });

  test('03- Checks button functionality', () => {
    const { history } = renderWithRouterAndRedux(<Login />);

    const loginButton = screen.getByTestId('btn-play');

    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');

    userEvent.type(inputName, 'Roberto');
    userEvent.type(inputEmail, 'roberto@gmail.com');

    expect(inputName.value).toBe('Roberto');
    expect(inputEmail.value).toBe('roberto@gmail.com');

    expect(loginButton).not.toBeDisabled();

    userEvent.click(loginButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/jogo');
  });

  test('04- Checks the Configuration Button', () => {
    const { history } = renderWithRouterAndRedux(<Login />);

    const configButton = screen.getByTestId('btn-settings');
    expect(configButton).toBeInTheDocument();

    userEvent.click(configButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/configuracao');
  });
});