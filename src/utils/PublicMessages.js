// ABI
import PublicMessageABI from 'contract_abis/PublicMessages';

class PublicMessages {
  constructor() {
    this.web3 = null;
    this.contract = null;
    this.eventListeners = [];
  }

  init(web3, networkId, account) {
    console.log('init');

    this.web3 = web3;

    const PublicMessage = PublicMessageABI.networks[networkId];
    if (PublicMessage) {
      this.contract = new web3.eth.Contract(
        PublicMessageABI.abi,
        PublicMessage.address,
        { from: account }
      );

      this.contract.events.MessageSaved().on('data', e => {
        this.eventListeners.forEach(el => {
          if (el.event === 'MessageSaved') {
            el.callback(e);
          }
        });
      });

      this.contract.events.SendingMessage().on('data', e => {
        this.eventListeners.forEach(el => {
          if (el.event === 'SendingMessage') {
            el.callback(e);
          }
        });
      });
    }
  }

  isInit() {
    if (!this.web3 || !this.contract) {
      console.log('isInit', this.web3, this.contract);

      throw new Error('Contract has not be loaded.');
    }
  }

  async getHandlePrice() {
    this.isInit();

    const price = await this.contract.methods.getHandlePrice().call();

    return this.web3.utils.fromWei(price, 'ether');
  }

  async setHandle(handle, value) {
    this.isInit();

    return await this.contract.methods.setHandle(handle).send({ value });
  }

  async getHandle() {
    this.isInit();

    return await this.contract.methods.getHandle().call();
  }

  async handles(address) {
    this.isInit();

    return await this.contract.methods.handles(address).call();
  }

  async sendMessage(message) {
    this.isInit();

    return await this.contract.methods.sendMessage(message).send();
  }

  async getMessages(page, count) {
    this.isInit();

    return await this.contract.methods.getMessages(page, count).call();
  }

  addEventListener(event, callback) {
    this.isInit();

    if (event !== 'MessageSaved' && event !== 'SendingMessage') {
      throw new Error('Wrong event');
    }

    this.eventListeners.push({
      event,
      callback
    });
  }

  removeEventListener(event, callback) {
    this.isInit();

    if (event !== 'MessageSaved' && event !== 'SendingMessage') {
      throw new Error('Wrong event');
    }

    this.eventListeners.filter(
      e => !(e.event === event && e.callback === callback)
    );
  }
}

export default new PublicMessages();
