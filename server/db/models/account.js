const Sequelize = require('sequelize')
const db = require('../db')

const Account = db.define('account', {
  name: {type: Sequelize.STRING, allowNull: false},
  phone: {type: Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING, allowNull: false},
  units: {type: Sequelize.DECIMAL, allowNull: false}
})

module.exports = Account
