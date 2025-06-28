import { Layout } from '../../pages/ui';
import { createBrowserRouter } from 'react-router-dom';
import { SignUpPage } from '../../pages';
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
    ],
  },
]);
