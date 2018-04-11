import UniversalRouter from 'universal-router';

const navTitle = 'Web Tools'

const navItems = JSON.stringify([
  { "active": false, "label": "Tally", "href": "javascript:window.renderTally();" },
  { "active": false, "label": "404 Page", "href": "javascript:window.renderError();"  }
]);

const navBar = `
  <standard-navbar title="${navTitle}" items='${navItems}'></standard-navbar>
`;

const routes = [
  {
    path: '/tally',
    action: () => `
      ${navBar}
      <br />
      <tally-tool></tally-tool>
    `
  }
]

const options = {
  errorHandler(error) {
    console.error(error)
    console.dir(error.context)
    return error.code === 404
      ? `
          ${navBar}
          <error-page title="404 Not Found"></error-page>
        `
      : `
          ${navBar}
          <error-page title="Oops! Something went wrong"></error-page>
        `
  }
};

const router = new UniversalRouter(routes, options);
const renderTally = () => router.resolve({ pathname: '/tally' }).then(html => document.querySelector('#main').innerHTML = html);
const renderError = () => router.resolve({ pathname: '/404' }).then(html => document.querySelector('#main').innerHTML = html);

renderTally();

window.renderTally = renderTally;
window.renderError = renderError;