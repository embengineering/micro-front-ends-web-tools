import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { loadManifest } from './utilities';

registerServiceWorker();
loadManifest('/micro-front-ends-standard-nav-bar');
loadManifest('/micro-front-ends-tally');
