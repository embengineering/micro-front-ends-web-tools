import './index.css';
import { loadManifest } from './utilities';
import UniversalRouter from 'universal-router';
import history from './history';
import routes from './routes';

const router = new UniversalRouter(routes);

const render = location => {
  router.resolve(location.pathname).then(route => {
    document.title = route.title;
    document.querySelector('#main').innerHTML = route.html;
  });
}

// load micro frontends manifests
loadManifest('https://embengineering.com/micro-front-ends-standard-nav-bar');
loadManifest('https://embengineering.com/micro-front-ends-tally');
loadManifest('https://embengineering.com/micro-front-ends-error-pages');

render(history.location); // initialize the app
history.listen(render); // listen for client-side navigation
