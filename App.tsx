import React from 'react';
import {styled, StyledProvider} from '@gluestack-style/react';
import {config} from './gluestack-style.config';
import {View} from 'react-native';

const Box = styled(View, {
  bg: '$primary500',
  h: '$6',
  w: '$6',
});

const App = () => {
  return (
    <StyledProvider config={config}>
      <Box />
    </StyledProvider>
  );
};

export default App;
