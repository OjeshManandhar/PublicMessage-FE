import React from 'react';

// styles
import * as S from './styles';

function FullScreenCenter({ children }) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}

export default FullScreenCenter;
