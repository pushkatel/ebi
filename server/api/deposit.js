const router = require('express').Router()
const {Deposit, Account} = require('../db/models')

//get all holdings summarized
router.get('/', async (req, res, next) => {
  try {
    const deposit = await Deposit.findAll()
    res.json(deposit)
  } catch (err) {
    next(err)
  }
})

//new purchase
router.post('/', async (req, res, next) => {
  try {
    const data = req.body
    const account = await Account.findByPK(data.account)
    const newDep = await Deposit.create(data)
    newDep.setAccount(account)
    res.json(newDep)
  } catch (err) {
    next(err)
  }
})

module.exports = router
