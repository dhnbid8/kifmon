const express = require("express");
const router = express.Router() ;
const {createTronWallet} = require("./../wallet/createWallet");
const axios = require('axios');


router.get("/", async (req, res)=>{
    const walet = await createTronWallet()
        .then(result => res.send(result));
});

router.get("/balance/:address",async (req, res)=>{
    const address = req.params["address"];
    try {
        const resp = await  axios.get(`https://apilist.tronscan.org/api/account?address=${address}`);

        res.send(resp.data.balances[0])

    } catch (error) {
        console.error(error)
    }
})

module.exports = router