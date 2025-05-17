const countryRouter = require('./countryRouter');
const stateRouter = require('./stateRouter');
const homeRouter = require('./homeRouter');
const plotRouter = require('./plotRouter');
const cdnRouter = require('./CDNRouter');
const userRouter = require('./userRouter');
const homeDocRouter = require('./homeDocRouter');

module.exports = {
  countryRouter,
  stateRouter,
  homeRouter,
  plotRouter,
  cdnRouter,
  userRouter,
  homeDocRouter
};
