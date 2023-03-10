import React, { FC } from 'react';

// custom components
import Animation from 'features/animation/Animation';
import { MainContainer } from 'components/containers';

const AnimationScreen: FC = () => {
  return (
    <MainContainer>
      <Animation />
    </MainContainer>
  );
};

export default AnimationScreen;