# Another express-webpack-react boilerplate

Inspired by http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup

# NPM Tasks

First run `npm install` to download all dependencies. Then you can run:

- `npm start` to run the application with webpack hot module replacement middleware,
- `npm test` to run tests once,
- `npm run test:watch` run tests in watch mode,
- `npm run test:coverage` generate tests code coverage,
- `npm run test:junit` generate junit tests results.

Reports for `coverage` and `junit` can be found in `./build/reports`.

# Heroku deployment

To deploy the application to heroku, run `heroku config:set NPM_CONFIG_PRODUCTION=false`. This is needed to fetch devDependencies on install, `npm start` runs with `NODE_ENV=production`.
