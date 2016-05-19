import config from '../config/';

export default function bundleScriptsPath() {
  // TODO: connect webpack bundle.js port to the config file
  return config.is.dev ? [
    'http://localhost:8080/bundle.js',
  ] : [
    '/public/scripts/bundle.js',
  ];
}
