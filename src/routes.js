import history from './history';

const onClick = event => {
  event.preventDefault(); // prevent full page reload
  history.push(event.currentTarget.getAttribute('href')); // do SPA navigation
}

const navTitle = 'Web Tools'

const navItems = JSON.stringify([
  { "active": false, "label": "Tally", "href": "/tally", onClick:onClick },
  { "active": false, "label": "404 Page", "href": "/404", onClick:onClick }
]);

const navBar = `
  <standard-navbar title="${navTitle}" items='${navItems}'></standard-navbar>
`;

const routes = {
  path: '/',
  children: [
    {
      path: '/',
      action() {
        return {
          title: 'Home',
          html: navBar
        };
      },
    },
    {
      path: '/tally',
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
      path: '/about',
      action() {
        return {
          title: 'About Us',
          html: `<h1>About Us</h1>`
        };
      },
    },
    {
      path: '*', // wildcard route (must go last)
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
  ],
};

export default routes;