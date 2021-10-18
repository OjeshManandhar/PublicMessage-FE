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
  const [stack, setStack] = useState(HomeStack.LOADING);

  useEffect(() => {
    async function checkForHandle() {
      const handle = await publicMessages.getHandle();

      handle === '' ? setStack(HomeStack.CREATE) : setStack(HomeStack.MESSAGE);
    }

    checkForHandle();
  }, []);

  if (stack === HomeStack.LOADING) {
    return <FullScreenCenter>Loading Home</FullScreenCenter>;
  } else if (stack === HomeStack.CREATE) {
    return <SetHandle account={account} create={true} />;
  } else if (stack === HomeStack.UPDATE) {
    return <SetHandle account={account} create={false} />;
  }

  return <MessagesArea account={account} />;
}

export default Home;
