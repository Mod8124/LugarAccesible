import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { Header } from '../../../src/app/components/Header';
import { searchSlice } from '../../../src/store/search/searchSlice';
import { authSlice } from '../../../src/store/auth/authSlice';
import { placesSlice } from '../../../src/store/places/placesSlice';
import Search from '../../../src/app/components/Header/Search/';
import { User } from '../../../src/app/components/Header/User/index';

// Create a mocked Redux store with an initial state
const mockStore = configureMockStore();
const store = mockStore({ search: searchSlice, places: placesSlice, auth: authSlice });

const mockRender = (children) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>,
  );
};

describe('Header', () => {
  it('should render Header', () => {
    mockRender(<Header />);
    const buttonElement = screen.getByText('Iniciar sesión');
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('Search', () => {
  it('should render Search component', () => {
    mockRender(<Search />);
    const inputElement = screen.getByPlaceholderText('Buscar Lugar');
    expect(inputElement).toBeInTheDocument();
  });
});

describe('User', () => {
  it('should render User component', () => {
    mockRender(<User />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
