module.exports = {
  mongodb: {
    options: {
      promiseLibrary: global.Promise,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  },
  graphql: true
};
