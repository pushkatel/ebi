const router = require('express').Router()
const {Account} = require('../db/models')
const {Op} = require('sequelize')

//get all accounts
router.get('/all', async (req, res, next) => {
  try {
    const accounts = await Account.findAll({
      where: {units: {[Op.gt]: 0}}
    })
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

//get Single Account
router.get('/:accountId', async (req, res, next) => {
  try {
    const account = await Account.findByPk(req.params.accountId)
    res.json(account)
  } catch (err) {
    next(err)
  }
})

//new account created
router.post('/new', async (req, res, next) => {
  try {
    const data = req.body
    const newAcc = await Account.create(data)
    res.json(newAcc)
  } catch (err) {
    next(err)
  }
})

module.exports = router
