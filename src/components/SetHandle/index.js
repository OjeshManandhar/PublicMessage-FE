import React from 'react';

function SetHandle({ create, account }) {
  return (
    <div>
      {create ? 'Create' : 'Change'} handle for {account}.
    </div>
  );
}

export default SetHandle;
