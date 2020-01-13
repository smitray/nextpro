/* eslint-disable quotes */
const moduleCheck = require('../utils/moduleCheck');

module.exports = {
  description: 'Add a component to the app',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['ES6 Class', 'Stateless Function']
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return moduleCheck.component(value) ? 'That component already exists.' : true;
      }
      return 'The name is required.';
    }
  },
  {
    type: 'confirm',
    name: 'wantPropTypes',
    default: true,
    message: 'Should the component have PropTypes?'
  }],
  actions: (data) => ([{
    type: 'add',
    path: '../app/client/components/{{properCase name}}/index.js',
    templateFile: data.type === 'ES6 Class'
      ? './component/es6class.js.hbs' : './component/stateless.js.hbs',
    abortOnFail: true
  }, {
    type: 'add',
    path: '../app/client/components/{{properCase name}}/{{camelCase name}}.test.js',
    templateFile: './component/test.js.hbs',
    abortOnFail: true
  }, {
    type: 'add',
    path: '../app/client/components/{{properCase name}}/{{properCase name}}.mdx',
    templateFile: './component/doc.mdx.hbs',
    abortOnFail: true
  }, {
    type: 'append',
    path: '../app/client/components/index.js',
    pattern: `/* INJECT_EXPORT */`,
    template: `export { default as {{properCase name}} } from './{{properCase name}}';`
  }])
};
