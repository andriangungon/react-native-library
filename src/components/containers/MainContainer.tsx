import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

import { ContainerProps } from './types';

import colors from 'themes/colors';
const { white } = colors;

const StyledView = styled.View`
  background-color: ${white};
  flex: 1;
  padding: 16px;
`;


const MainContainer: FunctionComponent<ContainerProps> = (props) => {
  return (
    <StyledView style={props.style}>{props.children}</StyledView>
  );
};

export default MainContainer;