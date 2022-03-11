const { createAllWallets } = require('./createWallet');
const { walletIsValid, checkWalletsvalidet } = require('./validator')
const { walletsInfo, walletInfo } = require('./wallet-module')

async function run() {
    const wallets = await createAllWallets()
    walletsInfo(wallets);
}
run();