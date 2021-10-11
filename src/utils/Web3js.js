// packages
import Web3 from 'web3';

// utils
import publicMessage from './PublicMessages';

class Web3js {
  constructor() {
    this.web3 = null;
    this.networkId = null;
    this.accountChangedHandler = () => {};
  }

  async init() {
    let web3 = null;

    // Select provider
    if (window.ethereum) {
      console.log('Using ethereum');

      web3 = new Web3(window.ethereum);

      // Add event listeners
      window.ethereum.on('accountsChanged', accounts => {
        this.accountChangedHandler(accounts[0]);
      });
    } else if (Web3.givenProvider) {
      console.log('Using web3');
      web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
    } else {
      throw new Error('No provider found. Install MetaMask.');
    }

    this.web3 = web3;
    this.networkId = await web3.eth.net.getId();

    const acc = await this.getAccount();
    if (!acc) {
      throw new Error('No account found.');
    }

    // Init contracts
    publicMessage.init();

    return acc;
  }

  async getAccount() {
    const accounts = await this.web3.eth.getAccounts();

    return accounts[0];
  }

  setAccountChangeHandler(cb) {
    this.accountChangedHandler = cb;
  }
}

export default new Web3js();
