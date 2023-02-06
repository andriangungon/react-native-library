import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { TextProps } from './types';

import colors from 'themes/colors';

const { textDark } = colors;

const StyledText = styled.Text`
  font-size: 13px;
  color: ${textDark};
`;

const SmallText: FunctionComponent<TextProps> = (props) => {
  return (
    <StyledText style={props.style}>{props.children}</StyledText>
  );
};

export default SmallText;