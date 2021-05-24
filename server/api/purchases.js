const router = require('express').Router()
const {Purchase} = require('../db/models')
const {Op} = require('sequelize')

router.get('/', async (req, res, next) => {
  try {
    const purchases = await Purchase.findAll({
      where: {quantity: {[Op.gt]: 0}}
      // attributes: [[Sequelize.fn('sum', Sequelize)]]
    })
    res.json(purchases)
  } catch (err) {
    next(err)
  }
})

module.exports = router
