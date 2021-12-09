const express = require('express')
const router = express.Router()

router.get('/clients')
router.get('/clients/:id')
router.post('/clients')
router.put('/clients/:id')
router.delete('/clients/:id')

module.exports = router
