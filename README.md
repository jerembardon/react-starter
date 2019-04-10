React Webpack 
=============


Configuration
------------------

This project use webpack & babel 7 with React, hot reload and hot module replacement are also set.

Material includes:

*  React 16
*  Jest / Enzyme
*  Eslint Airbnb config
*  Scss/Sass support


Step 1
------------------

Installing all project dependencies.

```
> npm install   // Install dependencies
> npm start     // Run application
```


Code quality
------------------
This project use Jest and EsLint to ensure a good code quality.
EsLint is configured with Airbnb styleguide.
You can find Enzyme config in ./config/enzyme folder.

The global jest treshold is set to 100% in jest.config.js file line 47. You can change it if you want.

Command for testing (set in package.json):

```
> npm run test:snapshot  // Only update snapshot
> npm run test:coverage  // Only run test with coverage
> npm test               // Run snapshot update, test with coverage and, at the end, linting !
```

The "coverage" folder can be found in ./config/jest/ folder.


Assets
------------------
In src/assets you can find 3 folders: fonts, img and style. For styling you can choose between css or Scss.
