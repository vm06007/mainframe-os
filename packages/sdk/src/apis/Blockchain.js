// @flow
import HookedProvider from 'web3-provider-engine/subproviders/hooked-wallet.js'
import ProviderEngine from 'web3-provider-engine'
import SubscriptionsProvider from 'web3-provider-engine/subproviders/subscriptions.js'
import RPCProvider from '../RPCProvider'
import ClientAPIs from '../ClientAPIs'

export default class BlockchainAPIs extends ClientAPIs {
  _web3Provider: ProviderEngine

  getWeb3Provider() {
    if (this._web3Provider) {
      return this._web3Provider
    }
    const rpc = this._rpc
    const engine = new ProviderEngine()
    const hookedWallet = new HookedProvider({
      getAccounts: async cb => {
        try {
          const accounts = await rpc.request('wallet_getEthAccounts')
          cb(null, accounts)
        } catch (err) {
          cb(err)
        }
      },
      signTransaction: async (params, cb) => {
        const txParams = {
          chain: 'ethereum',
          transactionData: params,
        }
        try {
          const res = await rpc.request('wallet_signTx', txParams)
          cb(null, res)
        } catch (err) {
          cb(err)
        }
      },
    })
    engine.addProvider(hookedWallet)
    const subsProvider = new SubscriptionsProvider()
    subsProvider.on('data', (err, notif) => {
      engine.emit('data', err, notif)
    })
    engine.addProvider(subsProvider)
    const rpcProvider = new RPCProvider(this._rpc)
    engine.addProvider(rpcProvider)
    engine.start()
    this._web3Provider = engine
    return engine
  }
}
