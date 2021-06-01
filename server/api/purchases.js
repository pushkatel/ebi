const router = require('express').Router()
const {Purchase, Ledger} = require('../db/models')
const {Op, Sequelize} = require('sequelize')

//get all holdings summarized
router.get('/holdings', async (req, res, next) => {
  try {
    const holdings = await Purchase.findAll({
      where: {quantity: {[Op.gt]: 0}},
      attributes: [
        'key',
        [Sequelize.fn('sum', Sequelize.col('quantity')), 'totalQuantity'],
        [Sequelize.fn('sum', Sequelize.col('cost')), 'totalCost']
      ],
      group: ['key']
      // group: ['ticker', 'contract', 'strike']
    })
    res.json(holdings)
  } catch (err) {
    next(err)
  }
})

//get everything that is owned individually
router.get('/all', async (req, res, next) => {
  try {
    const holdings = await Purchase.findAll({
      where: {quantity: {[Op.gt]: 0}}
    })
    res.json(holdings)
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
