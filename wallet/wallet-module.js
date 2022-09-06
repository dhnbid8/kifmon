function walletsInfo(wallets) {
    for (wallet in wallets) {
        console.log(`
		address:${wallets[wallet].address},
		key:${wallets[wallet].key},
		currency:${wallets[wallet].currency}
		`)
    }
}

function walletInfo(wallet) {
    console.log(`
		address:${wallet.address},
		key:${wallet.key},
		currency:${wallet.currency}
		`)
	return `
	{address:${wallet.address},
	key:${wallet.key},
	currency:${wallet.currency} }`;
}

module.exports = { walletsInfo, walletInfo };