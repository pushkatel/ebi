const router = require('express').Router()
const {Account} = require('../db/models')
const {Op} = require('sequelize')

//get all holdings summarized
router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.findAll({
      where: {units: {[Op.gt]: 0}}
    })
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

//new purchase
router.post('/new', async (req, res, next) => {
  try {
    const data = req.body
    const newLed = await Ledger.create({
      key: data.key,
      action: data.action,
      value: data.cost
    })
    const newPur = await Purchase.create(data)
    newPur.setLedger(newLed)
    res.json(newPur)
  } catch (err) {
    next(err)
  }
})

module.exports = router
