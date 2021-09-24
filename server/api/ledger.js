const router = require('express').Router()
const {Ledger, Account} = require('../db/models')
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

//Get current total cash, units, and invested amount
router.get('/current', async (req, res, next) => {
  try {
    const [current] = await Ledger.findAll({
      attributes: [
        [Sequelize.fn('sum', Sequelize.col('value')), 'totalCash'],
        [Sequelize.fn('sum', Sequelize.col('units')), 'totalUnits']
      ],
      raw: true
    })
    const [invested] = await Account.findAll({
      attributes: [
        [Sequelize.fn('sum', Sequelize.col('invested')), 'totalInvested']
      ],
      raw: true
    })
    const output = {...current, ...invested}
    res.json(output)
  } catch (err) {
    next(err)
  }
})

module.exports = router
