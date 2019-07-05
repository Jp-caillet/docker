// Dependencies
const mongoose = require('mongoose')
const db = require("../../db.js")
const validator = require('node-validator')

// Core
const check = validator.isObject()
  .withRequired('id', validator.isString())

module.exports = class SearchByEmail {
  constructor (app) {
    this.app = app
    this.run()
  }
  
  

  /**
   * Middleware
   */
  middleware () {
    this.app.post('/read', validator.express(check), (req, res) => {
      try {
        // Save
        
        
        const o_id = new mongoose.Types.ObjectId(req.body.id)
        db.collection('users').findOne({_id: o_id}, function(err,obj) {
          if(obj == null){
            res.status(200).json({
              code: 409,
              message: 'User Not Found'
            })
          }else{
            res.status(409).json({
              obj
            })
          }
          
        })
        
      } catch (e) {
        console.error(`[ERROR] user/searchByEmail -> ${e}`)
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