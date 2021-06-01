const {green, red} = require('chalk')
const db = require('../server/db/db')
const {Account, Deposit, Ledger, Purchase} = require('../server/db/models')
const accounts = require('./seed/accounts-seed')
const deposits = require('./seed/deposits-seed')
const ledgers = require('./seed/ledger-seed')
const purchases = require('./seed/purchases-seed')

const seedRoutine = async () => {
  try {
    await db.sync({force: true})

    // Accounts
    const returnedSeededAccounts = await Account.bulkCreate(accounts, {
      returning: true
    })
    console.log(green(`Seeded ${returnedSeededAccounts.length} Accounts`))

    // Ledger
    const returnedSeededLedger = await Ledger.bulkCreate(ledgers, {
      returning: true
    })
    console.log(green(`Seeded ${returnedSeededLedger.length} Ledgers`))

    // Deposits
    const returnedSeededDeposits = await Deposit.bulkCreate(deposits, {
      returning: true
    })
    console.log(green(`Seeded ${returnedSeededDeposits.length} Deposits`))

    // Purchases
    const returnedSeededPurchases = await Purchase.bulkCreate(purchases, {
      returning: true
    })
    console.log(green(`Seeded ${returnedSeededPurchases.length} Purchases`))

    console.log(green('Database sucessfully seeded'))
  } catch (error) {
    console.log(red(error))
  }
}

module.exports = seedRoutine
