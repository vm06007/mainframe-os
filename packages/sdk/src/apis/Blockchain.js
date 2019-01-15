// @flow
import HookedProvider from 'web3-provider-engine/subproviders/hooked-wallet.js'
import ProviderEngine from 'web3-provider-engine'
import SubscriptionsProvider from 'web3-provider-engine/subproviders/subscriptions.js'
import RPCProvider from '../RPCProvider'
import ClientAPIs from '../ClientAPIs'
import contractMap from 'eth-contract-metadata'
import abi from 'human-standard-token-abi'

const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    payable: false,
    type: 'function',
  },
]

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

  async sendERC20(tokenSymbol, srcAddr, dstAddr, amt) {
    // map tokenSymbol to contract address
    const tokenAddress = this.tokenAddressFromSymbol(tokenSymbol)

    // fetch and instantiate the token contact
    let contract = await new this.web3.eth.Contract(ERC20_ABI, tokenAddress)

    //
  }

  tokenAddressFromSymbol(symbol) {
    const match = Object.entries(contractMap)
        .filter(tokenData => String(tokenData[1].symbol).toLowerCase() === symbol.toLowerCase());
    return match.length > 0 ? match[0][0] : null;
  }

  /**
   * Find if selectedAddress has tokens with contract in contractAddress.
   *
   * @param {string} contractAddress Hex address of the token contract to explore.
   * @returns {boolean} If balance is detected, token is added.
   *
   */
  async getTokenBalance (contractAddress) {
    const ethContract = this.web3.eth.contract(ERC20_ABI).at(contractAddress)
    ethContract.balanceOf(this.selectedAddress, (error, result) => {
      if (!error) {
        if (!result.isZero()) {
          return result
        }
      }
    })
  }
}
