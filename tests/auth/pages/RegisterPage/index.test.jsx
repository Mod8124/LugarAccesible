import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { authSlice } from '../../../../src/store/auth/authSlice.jsx';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import RegisterPage from '../../../../src/auth/pages/RegisterPage/index.jsx';

// Create a mocked Redux store with an initial state
const mockStore = configureMockStore();
const store = mockStore({ auth: authSlice });

// mock browser router and mock auth store
const mockRender = () => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/*' element={<Navigate to='/register' />} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  );
};

describe('Register page', () => {
  it('should render the register page', () => {
    mockRender();
    const section = screen.getByRole('main');
    expect(section).toBeInTheDocument();
  });

  it('should render the title', () => {
    mockRender();
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });

  it('should render the register form', () => {
    mockRender();
    const nameInput = screen.getByPlaceholderText('Nombre');
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText('Contraseña');
    expect(passwordInput).toBeInTheDocument();

    const confirmPasswordInput = screen.getByPlaceholderText('Confirmar Contraseña');
    expect(confirmPasswordInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: 'Registrarse' });
    expect(submitButton).toBeInTheDocument();
  });
});
