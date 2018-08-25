# parcel-express-react

Parcel through Express, React starter-kit.

## Features

* [Parcel](https://parceljs.org/) bundler through [Express](https://expressjs.com/).
* [React](https://reactjs.org/) with React Router.
* [Bootstrap](https://getbootstrap.com/) through [ReactStrap](https://reactstrap.github.io/).
* [PostCSS](https://postcss.org/) with Autoprefixer and CSS Modules.
* [ESLint](https://eslint.org/) extending [Airbnb](https://github.com/airbnb/javascript#readme).

## Install

```shell
npm install
```

## Develop

```shell
npm start
```

Open http://localhost:1234. All files (except those in `/src/server`) will hot reload when edited.

## Deploy

Just deploy the entire repo to a Node web server environment, like Heroku. `npm start` will boot up Express, serving the production build (requires `process.env.NODE_ENV` to equal `'production'`).
