//Import dependencies

let cw = require('crypto-wallets');
const { TronLib } = require('@brickglobal/coin_tron');
const tronLib = new TronLib("https://api.nileex.io/")

function createBitcoineWalletBip32() {

    let wallet = cw.generateWallet('btc');
    return {
        address: wallet.address,
        key: wallet.privateKey,
        currency: wallet.currency
    }


};

function createEtheruemWallet() {
    let wallet = cw.generateWallet('eth');
    return {
        address: wallet.address,
        key: wallet.privateKey,
        currency: wallet.currency
    }
}

function createBitcoinCashWallet() {
    let wallet = cw.generateWallet('bch');

    return {
        address: wallet.address,
        key: wallet.privateKey,
        currency: wallet.currency
    }
}

function createDogeCoinWallet() {
    let wallet = cw.generateWallet('DOGE');

    return {
        address: wallet.address,
        key: wallet.privateKey,
        currency: wallet.currency
    }
}

function createLitecoinWallet() {
    let wallet = cw.generateWallet('LTC');

    return {
        address: wallet.address,
        key: wallet.privateKey,
        currency: wallet.currency
    }
}



function createNamecoinWallet() {
    let wallet = cw.generateWallet('NMC');

    return {
        address: wallet.address,
        key: wallet.privateKey,
        currency: wallet.currency
    }
}


async function createMoneroWallet() {
    let wallet = await cw.generateWallet('XMR')


    return {
        address: wallet.address,
        key: wallet.privateKey,
        currency: wallet.currency
    }

}

function createPeercoinWallet() {
    let wallet = cw.generateWallet('PPC');

    return {
        address: wallet.address,
        key: wallet.privateKey,
        currency: wallet.currency
    }
}

function createTezosWallet() {
    let wallet = cw.generateWallet('XTZ');
    return {
        address: wallet.address,
        key: wallet.privateKey,
        currency: wallet.currency
    }
}

async function createTronWallet() {
    let wallet = await tronLib.createAccount();
    wallet.currency = "TRX"

    return {
        address: wallet.address.base58,
        key: wallet.privateKey,
        currency: wallet.currency
    }
}


async function createAllWallets() {
    const bitcoin = createBitcoineWalletBip32();
    const etheruem = createEtheruemWallet();
    const bitcoinCash = createBitcoinCashWallet();
    const dogeCoin = createDogeCoinWallet();
    const litecoin = createLitecoinWallet();
    const monero = await createMoneroWallet();
    const Namecoin = createNamecoinWallet();
    const Peercoin = createPeercoinWallet();
    const Tezos = createTezosWallet();
    const TRX = await createTronWallet();

    return {
        bitcoin,
        etheruem,
        bitcoinCash,
        dogeCoin,
        litecoin,
        monero,
        Namecoin,
        Peercoin,
        Tezos,
        TRX
    }
}


module.exports = { createTronWallet, createAllWallets, createBitcoineWalletBip32 }