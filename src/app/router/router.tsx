import { Layout } from '../../pages/ui';
import { createBrowserRouter } from 'react-router-dom';
import { SignUpPage } from '../../pages';
import MainPage from '../../pages/mainPage/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
]);
