import history from './history';

const navTitle = 'Web Tools';
const baseUrl = history.location ? history.location.pathname : '/';

const navItems = JSON.stringify([
  { "active": false, "label": "Tally", "href": `${baseUrl}tally` },
  { "active": false, "label": "404 Page", "href": `${baseUrl}404` }
]);

const navBar = `
  <standard-navbar title="${navTitle}" items='${navItems}'></standard-navbar>
`;

const routes = [
  {
    path: `${baseUrl}tally`,
    action() {
      return {
        title: 'Tally',
        html: `
          ${navBar}
          <br />
          <tally-tool></tally-tool>
        `
      };
    }
  },
  {
    path: `${baseUrl}(.*)`, // wildcard route (must go last)
    action() {
      return {
        title: 'Page Not Found',
        html: `
          ${navBar}
          <error-page title="404 Not Found"></error-page>
        `,
      };
    },
  },
];

export default routes;