import App from './containers/App';
import IndexPage from './pages/Index';
import AboutPage from './pages/About';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: IndexPage },
  childRoutes: [
    { path: 'about', component: AboutPage },
  ],
};

export default routes;
