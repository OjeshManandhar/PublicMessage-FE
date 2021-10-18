import React, { useState, useCallback } from 'react';

// utils
import web3js from 'utils/Web3js';
import handles from 'utils/Handles';
import publicMessages from 'utils/PublicMessages';

// styles
import * as S from './styles';

function SetHandle({ create, account, handlePrice, goToMessage }) {
  const [handle, setHandle] = useState('');

  const setNewHandle = useCallback(async () => {
    try {
      await publicMessages.setHandle(handle, web3js.toWei(handlePrice));
      handles.updateHandle(handle, account);
      goToMessage();
    } catch (err) {
      window.alert('Please give a handle of length 2 to 10 characters');
    }
  }, [handle, account, goToMessage, handlePrice]);

  return (
    <S.Container>
      <S.Content>
        <S.Heading>
          {create ? 'Create a handle to chat' : 'Update your handle'}
        </S.Heading>

        <S.Price>
          <S.Strong>Price: </S.Strong>
          {handlePrice} Ether
        </S.Price>

        <S.Input
          value={handle}
          onChange={e => setHandle(e.target.value)}
          minLength={2}
          maxLength={10}
        />

        <S.SetBtn onClick={setNewHandle}>
          {create ? 'Create' : 'Update'} handle
        </S.SetBtn>

        {!create && <S.CancleBtn onClick={goToMessage}>Cancle</S.CancleBtn>}
      </S.Content>
    </S.Container>
  );
}

export default SetHandle;
