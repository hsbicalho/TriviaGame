import React from 'react';
import {render, screen} from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

describe('Test Login', () => {

  beforeEach(() => {
    renderWithRouterAndRedux(<Login />);
  });

  test('01- Checks login screen inputs', () => {
    //alterar o label text quando receber a tela de login
    const inputName = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');
    
    userEvent.type(inputName, 'Roberto');
    userEvent.type(inputEmail, 'roberto@gmail.com');

    expect(inputName).toBe('Roberto');
    expect(inputEmail).toBe('roberto@gmail.com');
  });
});