// Dependencies
const mongoose = require('mongoose')
const validator = require('node-validator')
const db = require("../../db.js")
const jwt = require('jsonwebtoken')

// Core
const check = validator.isObject()
  .withRequired('id', validator.isString())
  .withOptional('name', validator.isString())
  .withOptional('age', validator.isNumber())
  .withOptional('gender', validator.isString({ regex: /^male|femal$/ }))
  .withOptional('email', validator.isString())
  .withOptional('login', validator.isString())

module.exports = class dislike {
  constructor (app) {
    this.app = app
    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.post('/update', validator.express(check), async (req, res) => {
      try {
        // Save
        
        
        const o_id = new mongoose.Types.ObjectId(req.body.id)
        const user  = await db.collection('users').findOne({_id: o_id})
        let name = user.name
        let age = user.age
        let gender= user.gender
        let email =  user.email
        let login = user.login
        
        if(req.body.name != undefined){
          name = req.body.name
        }
        if(req.body.age!= undefined){
          age = req.body.age
        }
        if(req.body.gender!= undefined){
          gender = req.body.gender
        }
        if(req.body.email!= undefined){
          email = req.body.email
        }
        if(req.body.login!= undefined){
          login = req.body.login
        }

        

        const result  = await db.collection('users').findOneAndUpdate({ _id: o_id }, { $set: {"name" : name, "age" : age, "gender" : gender, "email" : email,"login": login } },{ new: true },(err, task) => {
          
          if (err) {
            return res.status(500).send(err)
          }else{
            res.status(200).json({
          'code': 200,
          'message': 'succes'
        })
          }
          
        }
        )       
      } catch (e) {
        console.error(`[ERROR] user/update -> ${e}`)
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