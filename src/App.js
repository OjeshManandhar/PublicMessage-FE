import React, { useState, useEffect, useCallback } from 'react';

// components
import Home from 'components/Home';
import FullScreenCenter from 'components/FullScreenCenter';

// utils
import web3js from 'utils/Web3js';

function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);

  const handleAccountChange = useCallback(acc => {
    setAccount(acc);
  }, []);

  useEffect(() => {
    async function init() {
      try {
        const account = await web3js.init();

        web3js.setAccountChangeHandler(handleAccountChange);

        setAccount(account);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [handleAccountChange]);

  return error ? (
    <FullScreenCenter>{error}</FullScreenCenter>
  ) : loading ? (
    <FullScreenCenter>Loading</FullScreenCenter>
  ) : (
    <Home account={account} />
  );
}

export default App;
