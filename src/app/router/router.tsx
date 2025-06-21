import { Layout } from '../../pages/ui';
import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
    ],
  },
]);
