// Dependencies
const mongoose = require('mongoose')
const Schema = require('../../models/users.js')
const validator = require('node-validator')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const saltRounds = 10
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const someOtherPlaintextPassword = 'not_bacon'
const db = require("../../db.js")

// Core
const check = validator.isObject()
  .withRequired('name', validator.isString())
  .withOptional('age', validator.isNumber())
  .withOptional('gender', validator.isString({ regex: /^male|femal$/ }))
  .withOptional('email', validator.isString())
  .withOptional('login', validator.isString())
  .withOptional('mdp', validator.isString())

module.exports = class Create {
  constructor (app) {
    this.app = app
    this.run()
  }
  
  /**
   * Data base connect
   */
  getModel (res, payload) {
    
    db.on('error', () => {
      res.status(500).json({
        'code': 500,
        'message': 'Internal Server Error'
      })

      console.error(`[ERROR] user/create getModel() -> Connetion fail`)
    })
    Schema.plugin(uniqueValidator)
    const User = mongoose.model('user', Schema)
    const model = new User

    model.name = payload.name
    model.age = payload.age
    model.gender = payload.gender
    model.email = payload.email
    model.login = payload.login
    model.mdp = bcrypt.hashSync(payload.mdp, saltRounds)

    return model
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.post('/create', validator.express(check), (req, res) => {
      try {
        // Save
        this.getModel(res, req.body).save((err, result) => {
          if (err) {
            res.status(401).json({
              'code': 401,
              'message': "user already exist"
            })

            
            console.error(`[ERROR] user/create middleware() -> ${err}`)
          }

          res.status(200).json(result)
        })
      } catch (e) {
        console.log("create user")
        console.error(`[ERROR] user/create -> ${e}`)
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}