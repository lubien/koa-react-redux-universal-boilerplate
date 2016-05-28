import App from './containers/App';
import IndexPage from './pages/Index';
import AboutPage from './pages/About';
import ProtectedPage from './pages/Protected';

import isLoggedIn from './lib/is-logged-in';

import Error401 from './pages/Error401';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: IndexPage },
  childRoutes: [
    { path: 'about', component: AboutPage },
    { path: 'protected', component: ProtectedPage, onEnter: isLoggedIn },
    { path: '401', component: Error401 },
  ],
};

export default routes;
