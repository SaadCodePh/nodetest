const express = require('express')
const router = express.Router()

function authenticate(req, res, next) {
    var { user } = req.query;
    if (user == '12345') {
        next()
    }
    else {
        res.status(500).json({ result: 'User Not Authenticated!' })
    }
}
module.exports = authenticate;