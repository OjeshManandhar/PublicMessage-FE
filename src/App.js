import React, { useState, useEffect } from 'react';

// packages
import Web3 from 'web3';

// components
import Test from 'components/Test';
import FullScreenCenter from 'components/FullScreenCenter';

// ABI
// import PublicMessageABI from 'contract_abis/PublicMessages';

function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  // const [publicMessage, setPublicMessage] = useState(null);

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

      // Get account
      const accounts = await web3.eth.getAccounts();
      console.log('accounts:', accounts);
      setAccount(accounts[0]);

      /*
      // Load contract
      const networkId = await web3.eth.net.getId();
      
      const PublicMessage = PublicMessageABI.networks[networkId];
      if (PublicMessage) {
        const pubMsg = new web3.eth.Contract(
          PublicMessageABI.abi,
          PublicMessage.address
        );

        console.log('pubMsg:', pubMsg);

        console.log(
          'handlePrice:',
          await pubMsg.methods.getHandlePrice().call()
        );

        // await pubMsg.methods.setHandle('Bob').send({
        //   from: accounts[0],
        //   value: '1000000000000000'
        // });

        console.log('handle:', await pubMsg.methods.getHandle().call());

        console.log(
          'contract balance:',
          web3.utils.fromWei(
            await web3.eth.getBalance(PublicMessage.address),
            'ether'
          )
        );
      }
      */

      return web3;
    }

    init();
  }, []);

  return error ? (
    <FullScreenCenter>Error</FullScreenCenter>
  ) : loading ? (
    <FullScreenCenter>Loading</FullScreenCenter>
  ) : (
    <Test str={account || ''} />
  );
}

export default App;
