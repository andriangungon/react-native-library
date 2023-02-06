import { StyleSheet } from 'react-native';

const center = {
  alignItems: 'center',
  justifyContent: 'center',
};

const variables = {
  button: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 5,
    ...center,
  },
}

const styles = StyleSheet.create({
  buttonPrimary: {
    ...variables.button,
    backgroundColor: variables.button.backgroundColor,
    borderColor: variables.button.borderColor,
    borderWidth: 1,
  },
  buttonMinHeight: { minHeight: 38 },
  buttonFull: {
    ...variables.button,
    alignSelf: 'stretch',
    borderRadius: 0,
    borderWidth: 0,
    flex: 1,
    height: 55,
  },
  buttonOutline: {
    ...center,
    backgroundColor: '#FFF',
    borderColor: '#bdbdbd',
    borderRadius: 10,
    borderWidth: 0.8,
    padding: 10,
  },
  buttonText: {
    color: '#444444',
    fontSize: 13,
    letterSpacing: 1,
    marginRight: 10,
    paddingVertical: 10,
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
});

export default styles;