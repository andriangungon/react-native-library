import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { ContainerProps } from './types';

import colors from 'themes/colors';
const { white } = colors;

const StyledView = styled.View`
  background-color: ${white};
  flex: 1;
  padding: 16px;
`;

const ScrollViewContainer: FunctionComponent<ContainerProps> = (props) => {
  return (
    <ScrollView>
      <StyledView style={props.style}>{props.children}</StyledView>
    </ScrollView>
  );
};

export default ScrollViewContainer;