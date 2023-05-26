import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Feedback from '../../../src/app/components/Feedback';
import { feedbackSlice } from '../../../src/store/feedback/feedbackslice.jsx';

// Create a mocked Redux store with an initial state
const mockStore = configureMockStore();
const store = mockStore({ feedback: feedbackSlice });

// created mockRender of the store
const mockRender = () => {
  return render(
    <Provider store={store}>
      <Feedback />
    </Provider>,
  );
};

// Test the component
describe('Feedback', () => {
  it('should render a button', () => {
    mockRender();
    const buttonElement = screen.getByText('Feedback');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should renders the modal feedback when active is true"', () => {
    mockRender();
    const buttonElement = screen.getByText('Feedback');
    fireEvent.click(buttonElement);
    expect(screen.queryByTestId('feedback')).toBeInTheDocument();
  });

  it('should toggle the modal feedback when active is true else display is equal to none', () => {
    mockRender();
    const buttonElement = screen.getByText('Feedback');

    // by default modal is not display it
    expect(screen.queryByTestId('feedback')).not.toBeInTheDocument();

    // when the button is click and active is true should display modal
    fireEvent.click(buttonElement);
    expect(screen.queryByTestId('feedback')).toBeInTheDocument();

    // when the button is click & active is false should not display modal
    fireEvent.click(buttonElement);
    expect(screen.queryByTestId('feedback')).not.toBeInTheDocument();
  });

  it('should show the svg close when modal is active', () => {
    mockRender();
    const buttonElement = screen.getByText('Feedback');
    fireEvent.click(buttonElement);
    expect(screen.queryByTestId('close')).toBeInTheDocument();
  });

  it('should not render the component feedbackOverall', () => {
    mockRender();
    const buttonElement = screen.getByText('Feedback');
    fireEvent.click(buttonElement);
    expect(screen.queryByTestId('feedbackOverall')).not.toBeInTheDocument();
  });

  it('should render the component feedbackOverall', () => {
    mockRender();

    const buttonElement = screen.getByText('Feedback');
    fireEvent.click(buttonElement);

    // render feedbackOverall when active is true and view === 'recommend
    const feedbackOverallElement = screen.getByTestId('feedback-overall');
    expect(feedbackOverallElement).toBeInTheDocument();
  });
});
