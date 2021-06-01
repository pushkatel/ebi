const Sequelize = require('sequelize')
const db = require('../db')

const Ledger = db.define('ledger', {
  key: {type: Sequelize.STRING, allowNull: true},
  action: {
    type: Sequelize.ENUM(
      'Deposit',
      'Withdraw',
      'Credit/Open',
      'Credit/Close',
      'Debit/Open',
      'Debit/Close'
    ),
    allowNull: false
  },
  value: {type: Sequelize.INTEGER, allowNull: false},
  shares: {type: Sequelize.INTEGER, allowNull: true},
  units: {type: Sequelize.INTEGER, allowNull: true}
})

module.exports = Ledger
