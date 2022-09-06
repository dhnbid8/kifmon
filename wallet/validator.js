var WAValidator = require('@unspentio/multicoin-address-validator');
const {createAllWallets} = require('./createWallet');


function walletIsValid(address, currency){
	
	try{
	var valid = WAValidator.validate(address, currency);
	if(valid){
    	return true;
	}else{
    	return false;
	}
	}catch(err){
		console.log(err);
	}

}
async function checkWalletsvalidet(wallets) {

	try{
		for(wallet in wallets ){
			// console.log(wallets[wallet])
			console.log(walletIsValid(wallets[wallet].address, wallets[wallet].currency))
		}
	}catch(err){
		console.log(err);
	}
}

module.exports = {walletIsValid, checkWalletsvalidet}