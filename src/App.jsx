import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { TourProvider } from '@reactour/tour';
import { steps } from './helpers/steps';

function App() {
  return (
    <Provider store={store}>
      <TourProvider steps={steps}>
        <RouterProvider router={router} />
      </TourProvider>
      <Toaster />
    </Provider>
  );
}

export default App;
