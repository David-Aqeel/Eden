const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')


// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create)


router.post('/login', usersCtrl.login)

// we need to export our router
module.exports = router