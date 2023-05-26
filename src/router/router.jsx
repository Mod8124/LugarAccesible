import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { Fragment } from 'react';

import HomePage from '../app/pages/HomePage';
import { AuthRoutes } from './AuthRoutes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path='/' element={<HomePage />} />

      <Route path='/auth/*' element={<AuthRoutes />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Fragment>,
  ),
);
