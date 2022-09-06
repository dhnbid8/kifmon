var balance = require('crypto-balances-2');

async function getWalletBalance(address) {
    const blance  = await balance(address).then(result => console.log(result));
    return balance;
}

module.exports = {getWalletBalance}