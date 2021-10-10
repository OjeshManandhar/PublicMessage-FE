import React, { useState, useEffect } from 'react';

// packages
import Web3 from 'web3';

// components
import Test from 'components/Test';

function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function init() {
      let web3;

      // Select provider

      if (window.ethereum) {
        console.log('Using ethereum');

        web3 = new Web3(window.ethereum);

        // Add event listeners
        window.ethereum.on('accountsChanged', accounts => {
          console.log('accounts on change:', accounts);
          setAccount(accounts[0]);
        });
      } else if (Web3.givenProvider) {
        console.log('Using web3');
        web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
      } else {
        alert('Install MetaMask');
        setError(true);
        return;
      }

      setError(false);
      setLoading(false);

      const accounts = await web3.eth.getAccounts();
      console.log('accounts:', accounts);
      setAccount(accounts[0]);

      return web3;
    }

    init();
  }, []);

  return error ? (
    <h1>Error</h1>
  ) : loading ? (
    <h1>Loading</h1>
  ) : (
    <Test str={account || ''} />
  );
}

export default App;
