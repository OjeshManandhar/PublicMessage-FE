// utils
import publicMessage from 'utils/PublicMessages';

class Handle {
  constructor() {
    this.handles = [];
  }

  async getHandle(address) {
    const found = this.handles.find(h => h.address === address);

    if (found) return found.handle;

    const handle = await publicMessage.handles(address);

    this.handles.push({
      address,
      handle
    });

    return handle;
  }

  updateHandle(handle, address) {
    const found = this.handles.find(h => h.address === address);

    if (found) {
      found.handle = handle;
    }
  }
}

export default new Handle();
