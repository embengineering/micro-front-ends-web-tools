import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { loadManifest } from './utilities';

registerServiceWorker();
loadManifest('http://embengineering.com/micro-front-ends-standard-nav-bar');
loadManifest('http://embengineering.com/micro-front-ends-tally');
