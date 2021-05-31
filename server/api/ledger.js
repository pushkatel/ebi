const router = require('express').Router()
const {Ledger} = require('../db/models')
const {Sequelize} = require('sequelize')

//new ledger entry
router.post('/new', async (req, res, next) => {
  try {
    const data = req.body
    //ledger add
    const {newPur} = await Ledger.create(data)
    res.json(newPur)
  } catch (err) {
    next(err)
  }
})

module.exports = router
