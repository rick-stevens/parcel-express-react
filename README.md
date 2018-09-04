# parcel-express-react

Parcel through Express, React starter-kit.

## Features

- [x] [Parcel](https://parceljs.org/) bundler through [Express](https://expressjs.com/).
- [x] [React](https://reactjs.org/) with React Router.
- [x] [Bootstrap](https://getbootstrap.com/) through [ReactStrap](https://reactstrap.github.io/).
- [x] [PostCSS](https://postcss.org/) with Autoprefixer and CSS Modules.
- [x] [ESLint](https://eslint.org/) extending [Airbnb](https://github.com/airbnb/javascript#readme).

## Install

```shell
npm install
```

## Develop

```shell
npm start
```

Open http://localhost:1234.

- [x] All files in `/src/client` will hot reload when edited.
- [x] All files in `/src/server` will cause a server restart when edited (requires manual refresh).

## Deploy

Just deploy the entire repo to a Node web server environment, like Heroku. `npm start` will boot up Express, serving the production build (requires `process.env.NODE_ENV` to equal `'production'`).
