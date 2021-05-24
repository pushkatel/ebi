const Sequelize = require('sequelize')
const db = require('../db')

const Ledger = db.define('ledger', {
  value: {type: Sequelize.INTEGER, allowNull: false},
  shares: {type: Sequelize.INTEGER, allowNull: true},
  units: {type: Sequelize.INTEGER, allowNull: true}
})

module.exports = Ledger
