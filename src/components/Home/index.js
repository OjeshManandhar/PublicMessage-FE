import React, { useState, useEffect } from 'react';

// components
import SetHandle from 'components/SetHandle';
import MessagesArea from 'components/MessagesArea';
import FullScreenCenter from 'components/FullScreenCenter';

// utils
import publicMessages from 'utils/PublicMessages';

// global
import { HomeStack } from 'global/enum';

function Home({ account }) {
  const [handlePrice, setHandlePrice] = useState(null);
  const [stack, setStack] = useState(HomeStack.LOADING);

  useEffect(() => {
    async function checkForHandle() {
      const handle = await publicMessages.getHandle();
      const price = await publicMessages.getHandlePrice();

      setHandlePrice(price);

      handle === '' ? setStack(HomeStack.CREATE) : setStack(HomeStack.MESSAGE);
    }

    checkForHandle();
  }, []);

  if (stack === HomeStack.LOADING) {
    return <FullScreenCenter>Loading Home</FullScreenCenter>;
  } else if (stack === HomeStack.CREATE) {
    return (
      <SetHandle
        create={true}
        handlePrice={handlePrice}
        goToMessage={() => setStack(HomeStack.MESSAGE)}
      />
    );
  } else if (stack === HomeStack.UPDATE) {
    return (
      <SetHandle
        create={false}
        handlePrice={handlePrice}
        goToMessage={() => setStack(HomeStack.MESSAGE)}
      />
    );
  }

  return <MessagesArea account={account} />;
}

export default Home;
