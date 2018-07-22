const Bundler = require('parcel-bundler');
const app = require('express')();
const { handleMethod } = require('./server/api');

const port = process.env.PORT || 1234;
const bundler = new Bundler(`${__dirname}/client/index.html`);

app.get('/api/:method', handleMethod);
app.use(bundler.middleware());
app.listen(port);

if (process.env.NODE_ENV !== 'production') {
  bundler.on('bundled', () => console.log(`Open: http://localhost:${port}`));
}
