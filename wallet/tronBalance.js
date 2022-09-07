const axios = require('axios');

async function getTronBalnce(address){

    try {
        const res = await  axios.get(`https://apilist.tronscan.org/api/account?address=${address}`);

        return res.data.balances[0];

    } catch (error) {
        console.error(error)
    }

}

module.exports = getTronBalnce