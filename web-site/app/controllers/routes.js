const UserShow = require('./user/read.js')
const UserCreate = require('./user/create.js')
const UserSearch = require('./user/search.js')
const UserUpdate = require('./user/update.js')
const UserDelete = require('./user/delete.js')

module.exports = {
  user: {
    UserCreate,
    UserShow,
    UserSearch,
    UserUpdate,
    UserDelete
  }
}

