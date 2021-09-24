import './index.css';
import { loadManifest } from './utilities';
import UniversalRouter from 'universal-router';
import routes from './routes';
import history from './history';

const baseUrl = history.location ? history.location.pathname : '/';

// load micro frontends manifests
loadManifest('/micro-front-ends-standard-nav-bar');
loadManifest('/tally');
loadManifest('/micro-front-ends-error-pages');

// initialize the app
render({ pathname: `${baseUrl}tally` });

// listen for client-side navigation
history.listen(render);

// prevent full refresh on nav links click
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    bindNavLinks();
  }
};

function bindNavLinks() {
  document.querySelectorAll('.nav-link').forEach(navLink => {
    navLink.addEventListener('click', onClick)
  });
}

function onClick(event) {
  event.preventDefault(); // prevent full page reload
  history.push(event.currentTarget.getAttribute('href')); // do SPA navigation
}

function render(location) {
  const router = new UniversalRouter(routes);
  router.resolve(location.pathname).then(route => {
    document.title = route.title;
    document.querySelector('#main').innerHTML = route.html;
    bindNavLinks();
  });
}