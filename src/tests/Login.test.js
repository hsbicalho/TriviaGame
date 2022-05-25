import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Test Login', () => {
  test('01- Checks login screen inputs', () => {
    renderWithRouterAndRedux(<App />);
    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');
    
    userEvent.type(inputName, 'Roberto');
    userEvent.type(inputEmail, 'roberto@gmail.com');

    expect(inputName.value).toBe('Roberto');
    expect(inputEmail.value).toBe('roberto@gmail.com');
  });

  test('02- Checks if the button is disabled', () => {
    renderWithRouterAndRedux(<App />);
    const loginButton = screen.getByTestId('btn-play');
    expect(loginButton).toBeDisabled();
  });

  test('03- Checks button functionality', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;

    const loginButton = screen.getByTestId('btn-play');

    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');

    userEvent.type(inputName, 'Roberto');
    userEvent.type(inputEmail, 'roberto@gmail.com');

    expect(inputName.value).toBe('Roberto');
    expect(inputEmail.value).toBe('roberto@gmail.com');

    expect(loginButton).not.toBeDisabled();

    userEvent.click(loginButton);
    expect(pathname).toBe('/jogo');
  });

  test('04- Checks the Configuration Button', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;

    const configButton = screen.getByTestId('btn-settings');
    expect(configButton).toBeInTheDocument();

    userEvent.click(configButton);
    expect(pathname).toBe('/configuracao');
  });
});