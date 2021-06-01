const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/purchases', require('./purchases'))
router.use('/ledger', require('./ledger'))
router.use('/accounts', require('./account'))
router.use('/deposit', require('./deposit'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
