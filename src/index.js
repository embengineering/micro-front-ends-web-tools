import './index.css';
import { loadManifest } from './utilities';
import UniversalRouter from 'universal-router';
import routes from './routes';
import history from './history';

const bindNavLinks = () => {
  document.querySelectorAll('.nav-link').forEach(navLink => {
    navLink.addEventListener('click', onClick)
  });
}

const onClick = event => {
  event.preventDefault(); // prevent full page reload
  history.push(event.currentTarget.getAttribute('href')); // do SPA navigation
}

const render = location => {
  const router = new UniversalRouter(routes);
  router.resolve(location.pathname).then(route => {
    document.title = route.title;
    document.querySelector('#main').innerHTML = route.html;
    bindNavLinks();
  });
}

// load micro frontends manifests
loadManifest('/micro-front-ends-standard-nav-bar');
loadManifest('/micro-front-ends-tally');
loadManifest('/micro-front-ends-error-pages');

render(history.location); // initialize the app
history.listen(render); // listen for client-side navigation

// prevent full refresh on nav links click
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    bindNavLinks();
  }
};