const Sequelize = require('sequelize')
const db = require('../db')

const Deposit = db.define('deposit', {
  amount: {type: Sequelize.INTEGER, allowNull: false},
  units: {type: Sequelize.DECIMAL, allowNull: false}
})

module.exports = Deposit
