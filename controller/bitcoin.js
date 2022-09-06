const express = require('express');
const router = express.Router();
const {createBitcoineWalletBip32} = require("../wallet/createWallet");


router.use((req, res, next)=>{
    console.log("Time : ",Date.now(), " ", req.url);
    next();
});

router.get('/', (req, res) => {

    const wallet = createBitcoineWalletBip32();
    res.send(wallet);

})



module.exports = router