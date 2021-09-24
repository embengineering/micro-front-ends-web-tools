import 'babel-polyfill';
import axios from 'axios';

const handleError = error =>
    console.error(error);

const handleSucess = (location, { data: manifest }) => {
    console.log('Manifest configuration loaded:', manifest);

    var files = manifest.files || manifest;

    let style = document.createElement('link');
    let script = document.createElement('script');

    style.rel = 'stylesheet';
    style.href = `${location}/${files['main.css']}`;

    script.type = 'text/javascript';
    script.src = `${location}/${files['main.js']}`;

    document.head.appendChild(style);
    document.body.appendChild(script);
};

const loadManifest = location =>
    axios.get(`${location}/asset-manifest.json`, {
        headers: {
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(handleSucess.bind(this, location))
    .catch(handleError);

export {
  loadManifest
};