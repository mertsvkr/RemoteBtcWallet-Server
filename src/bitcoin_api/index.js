const { listWalletDir } = require("./listwalletdir")
const { loadWallet } = require("./loadwallet")

/** all wallets which already exist should be loaded before using them. */
const response = listWalletDir()
if (response.success) {
    const wallets = response.wallets
    wallets.forEach((wallet) => {
        loadWallet(wallet.name)
    })
}