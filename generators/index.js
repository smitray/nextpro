const graph = require('./graphql');

module.exports = (plop) => {
  plop.setGenerator('graphql', graph);
};
