import { Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from '../auth/pages/RegisterPage';
import LoginPage from '../auth/pages/LoginPage/Index';
import { ValidationPage } from '../auth/pages/ValidationPage';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/validation/:code' element={<ValidationPage />} />
      <Route path='*' element={<Navigate to='/register' />} />
    </Routes>
  );
};
