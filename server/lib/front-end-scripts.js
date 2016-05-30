import config from '../config/';

export default function bundleScriptsPath() {
  if (config.is.dev) {
    return [
      `${config.WEBPACK_BASE_URL}/bundle.js`,
    ];
  }
  const { app, vendor } = require('../../webpack.assets.json'); // eslint-disable-line
  return [
    `/public/scripts/${vendor.js}`,
    `/public/scripts/${app.js}`,
  ];
}
