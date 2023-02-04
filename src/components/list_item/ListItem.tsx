import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { ChevronIcon } from 'components/icons';

interface Props {
  onPress: () => void;
  title:  string;
}

const ListItem: FC<Props> = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style.container}>
      <Text>{ title }</Text>
      <ChevronIcon />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default ListItem;