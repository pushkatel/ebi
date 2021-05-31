const Sequelize = require('sequelize')
const db = require('../db')

const Purchase = db.define('purchase', {
  key: {type: Sequelize.STRING, allowNull: false}, //change to false
  ticker: {type: Sequelize.STRING, allowNull: false},
  cost: {type: Sequelize.INTEGER, allowNull: false},
  contract: {type: Sequelize.ENUM('Stock', 'Call', 'Put', 'Spread', 'Coin')},
  strike: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  expire: {type: Sequelize.DATE, allowNull: true},
  quantity: {type: Sequelize.INTEGER, allowNull: false}
})

module.exports = Purchase
