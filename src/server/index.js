const Bundler = require('parcel-bundler');
const path = require('path');
const app = require('express')();
const { handleMethod } = require('./api');

const port = process.env.PORT || 1234;
const bundler = new Bundler(path.join(__dirname, '../client/index.html'));

app.get('/api/:method', handleMethod);
app.use(bundler.middleware());
app.listen(port);

if (process.env.NODE_ENV !== 'production') {
  bundler.on('bundled', () => console.log(`Serving from: http://localhost:${port}`));
}
