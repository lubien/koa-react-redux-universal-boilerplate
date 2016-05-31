import Layout from './Layout';

// Middlewares
import isLoggedIn from 'utils/is-logged-in';

// Root Routes Components
import IndexPage from './Index';
import AboutPage from './About';
import ProtectedPage from './Protected';

// Users Routes Components

import UsersList from './users/List';

// Errors Routes Components

import Error401 from './error/401';

const routes = {
  path: '/',
  component: Layout,
  indexRoute: {
    component: IndexPage,
  },

  childRoutes: [
    {
      path: 'about',
      component: AboutPage,
    }, {
      path: 'protected',
      component: ProtectedPage,
      onEnter: isLoggedIn,
    },

    // Users Routes
    {
      path: 'users',
      childRoutes: [
        {
          path: 'list',
          components: UsersList,
        },
      ],
    },

    // Error Routes
    {
      path: 'error',
      childRoutes: [
        {
          path: '401',
          component: Error401,
        },
      ],
    },
  ],
};

export default routes;
