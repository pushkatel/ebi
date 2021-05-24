const Sequelize = require('sequelize')
const db = require('../db')

const Account = db.define('account', {
  name: {type: Sequelize.STRING, allowNull: false},
  phone: {type: Sequelize.INTEGER, allowNull: false},
  email: {type: Sequelize.STRING, validate: {isEmail: true}, allowNull: false},
  units: {type: Sequelize.INTEGER, allowNull: false}
})

module.exports = Account
