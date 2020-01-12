export default {
  title: 'NextPro',
  ignore: ['readme.md'],
  dest: 'docs',
  gatsbyRemarkPlugins: [
    'gatsby-remark-copy-linked-files',
    {
      resolve: 'gatsby-remark-mermaid',
      options: {
        theme: 'forest'
      }
    },
    {
      resolve: 'gatsby-remark-prismjs',
      // OPTIONAL
      options: {}
    }
  ]
};
