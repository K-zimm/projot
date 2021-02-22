if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb+srv://kylez:aredpeach333@node-auth-crud.e0v4t.mongodb.net/projot?retryWrites=true&w=majority',
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/projot-dev' };
}
