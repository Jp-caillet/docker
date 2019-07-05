const mongoose = require('mongoose')
let url = 'mongodb://mongo-rs0-1,mongo-rs0-2,mongo-rs0-3/project?replicaSet=rs0'
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  reconnectTries: 80,
  poolSize: 10
}
mongoose.connect(url,options)
this.db = mongoose.connection
module.exports = this.db