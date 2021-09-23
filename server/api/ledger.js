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

//Get current unit price and invested amount
router.get('/current', async (req, res, next) => {
  try {
    const current = await Ledger.findAll({
      attributes: [
        [Sequelize.fn('sum', Sequelize.col('value')), 'totalInvested'],
        [Sequelize.fn('sum', Sequelize.col('units')), 'totalUnits']
      ]
    })
    res.json(current)
  } catch (err) {
    next(err)
  }
})

module.exports = router
