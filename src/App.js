import React, { useState, useEffect } from 'react';

// packages
import Web3 from 'web3';

// components
import Test from 'components/Test';

function App() {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        alert('Install MetaMask');
        return;
      }

      setLoading(false);

      const accounts = await window.web3.eth.getAccounts();
      console.log('accounts:', accounts);
      setAccount(accounts[0]);
    }

    init();
  }, []);

  return loading ? <h1>Loading</h1> : <Test str={account || ''} />;
}

export default App;
