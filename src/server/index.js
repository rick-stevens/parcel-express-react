const Bundler = require('parcel-bundler');
const app = require('express')();
const path = require('path');
const { handleMethod } = require('./api'); // Example

const port = process.env.PORT || 1234;
const bundler = new Bundler(path.join(__dirname, '../client/index.html'));

app
  .use('/api/:method', handleMethod)
  .use(bundler.middleware())
  .listen(port);

if (process.env.NODE_ENV !== 'production') {
  bundler.on('bundled', () => console.log(`Serving from: http://localhost:${port}`));
}
