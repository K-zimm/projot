if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://<kylez>:<aredpeach333>@ds137862.mlab.com:37862/projot-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/projot-dev'}
}