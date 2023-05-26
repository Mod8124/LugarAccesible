import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { filterSlice } from '../../../src/store/filter/filterSlice';
import { Filter } from '../../../src/app/components/Filter';

const mockStore = configureMockStore();
const store = mockStore({ filter: filterSlice });

const mockRender = () => {
  return render(
    <Provider store={store}>
      <Filter />
    </Provider>,
  );
};

describe('Filter', () => {
  it('should render filter', () => {
    mockRender();
    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();
  });

  it('should render a button with text lugar accesible', () => {
    mockRender();
    const buttonElement = screen.getByText('Lugar Accesible');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render a button with a text lugar no-accesible', () => {
    mockRender();
    const buttonElement = screen.getByText('Lugar No-Accesible');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render a img', () => {
    mockRender();
    const imgElements = screen.getAllByAltText('icon wheelchair');
    const imgElement = imgElements[0];
    expect(imgElement).toBeInTheDocument();
  });
});
