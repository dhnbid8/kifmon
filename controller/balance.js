const express = require('express');
const router = express.Router();
var balance = require('crypto-balances-2');


router.get('/balance/:address', async (req, res) => {
    const address = req.params.address;
    const blance  = await balance(address).then(result => res.send(result));
})


module.exports = router