const router = require('express').Router()
const {Holding, Ledger} = require('../db/models')
const {Op, Sequelize} = require('sequelize')

//get all holdings by equity
router.get('/holdings', async (req, res, next) => {
  try {
    const holdings = await Holding.findAll({
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

//get all holdings individually
router.get('/all', async (req, res, next) => {
  try {
    const holdings = await Holding.findAll({
      where: {quantity: {[Op.gt]: 0}}
    })
    res.json(holdings)
  } catch (err) {
    next(err)
  }
})

//get all holdings individually
router.get('/one', async (req, res, next) => {
  try {
    const holdings = await Holding.findOne({
      where: {quantity: {[Op.gt]: 0}}
    })
    res.json(holdings)
  } catch (err) {
    next(err)
  }
})

//Buy a new stock, Save into ledger and purchases
router.post('/buy', async (req, res, next) => {
  try {
    const data = req.body
    const newLed = await Ledger.create({
      key: data.key,
      action: data.action,
      value: data.cost,
      quantity: data.quantity
    })
    const newPur = await Holding.create(data)
    newPur.setLedger(newLed)
    res.json(newPur)
  } catch (err) {
    next(err)
  }
})

const getAvgCost = async key => {
  const holdings = await Holding.findAll({
    where: {key: key},
    attributes: [
      'key',
      [Sequelize.fn('sum', Sequelize.col('quantity')), 'totalQuantity'],
      [Sequelize.fn('sum', Sequelize.col('cost')), 'totalCost']
    ],
    group: ['key'],
    raw: true
  })

  return Math.round(holdings[0].totalCost / holdings[0].totalQuantity)
}

//sell a equity, Save into ledger and purchases
router.post('/sell', async (req, res, next) => {
  try {
    const data = req.body
    //ledger records the sale amount
    const newLed = await Ledger.create({
      key: data.key,
      action: data.action,
      value: data.cost,
      quantity: data.quantity
    })
    //get average cost and update in data
    const avgPrice = await getAvgCost(data.key)
    const purchaseData = {...data, cost: data.quantity * avgPrice}
    //Purchase subtracts the average cost
    const newPur = await Holding.create(purchaseData)
    newPur.setLedger(newLed)
    res.json(newPur)
  } catch (err) {
    next(err)
  }
})

module.exports = router
