const fs = require('fs');

const api = fs.readdirSync('app/server/rest');
const graph = fs.readdirSync('app/server/graph');
const component = fs.readdirSync('app/client/components');

const moduleCheck = (components, comp) => components.indexOf(comp) >= 0;

module.exports = {
  api: (cmp) => moduleCheck(api, cmp),
  graph: (cmp) => moduleCheck(graph, cmp),
  component: (cmp) => moduleCheck(component, cmp)
};
