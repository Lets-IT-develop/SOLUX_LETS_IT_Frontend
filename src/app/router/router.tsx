import { Layout } from '../../pages/ui';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage, SignUpPage } from '../../pages';
import { MainPage } from '../../pages';
import ProjectsPage from '../../pages/projectsPage/ProjectsPage';
import MembersPage from '../../pages/membersPage/MembersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        children: [
          {
            path: '',
            element: <Navigate to="/projects" replace />,
          },
          {
            path: '/projects',
            element: <ProjectsPage />,
          },
          {
            path: '/members',
            element: <MembersPage />,
          },
        ],
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);
