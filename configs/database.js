if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb://kylez:aredpeach333@node-auth-crud-shard-00-00.e0v4t.mongodb.net:27017,node-auth-crud-shard-00-01.e0v4t.mongodb.net:27017,node-auth-crud-shard-00-02.e0v4t.mongodb.net:27017/projot?ssl=true&replicaSet=atlas-na4wn4-shard-0&authSource=admin&retryWrites=true&w=majority',
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/projot-dev' };
}
