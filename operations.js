const express = require('express')
const router = express.Router()
const app = express()

router.get('/add', (req, res) => {
    try {
        var { a, b } = req.query;

        if (typeof (a) != 'number') {
            a = Number(a)
        }
        if (typeof (b) != 'number') {
            b = Number(b)
        }

        var resultObj = a + b;
        if (resultObj) {
            return res.status(200).json({ result: resultObj });
        }
        else {
            return res.status(500).json({ result: 'please enter valid numbers' });
        }
    }
    catch (ex) {
        return res.status(500).json({ result: 'inputs are not valid' });
    }

})

module.exports = router;