import App from './containers/App';
import IndexPage from './pages/Index';
import AboutPage from './pages/About';
import ProtectedPage from './pages/Protected';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: IndexPage },
  childRoutes: [
    { path: 'about', component: AboutPage },
    { path: 'protected', component: ProtectedPage },
  ],
};

export default routes;
