// ABI
import PublicMessageABI from 'contract_abis/PublicMessages';

class PublicMessages {
  constructor() {
    this.web3 = null;
    this.contract = null;
  }

  init(web3, networkId) {
    this.web3 = web3;

    const PublicMessage = PublicMessageABI.networks[networkId];
    if (PublicMessage) {
      this.contract = new web3.eth.Contract(
        PublicMessageABI.abi,
        PublicMessage.address
      );
    }
  }

  isInit() {
    if (!this.web3 || !this.contract) {
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

  async sendMessage(message) {
    this.isInit();

    return await this.contract.methods.sendMessage(message).send();
  }

  async getMessages(page, count) {
    this.isInit();

    return await this.contract.methods.getMessages(page, count).call();
  }
}

export default new PublicMessages();
