import config from '../config/';

export default function bundleScriptsPath() {
  return config.is.dev ? [
    `${config.WEBPACK_BASE_URL}/bundle.js`,
  ] : [
    '/public/scripts/bundle.js',
  ];
}
