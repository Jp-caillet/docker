// Dependencies
const mongoose = require('mongoose')
const validator = require('node-validator')
const db = require("../../db.js")


// Core
 

module.exports = class Show {
  constructor (app) {
    this.app = app
    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.get('/search', async (req, res) => {
      try {
        // Save
        
        const result  = await db.collection('users').find( {} ).toArray()
        res.status(200).json(result)
        
      } catch (e) {
        console.error(`[ERROR] user/show -> ${e}`)
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