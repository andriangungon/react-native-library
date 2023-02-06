import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
  },
  mobileLogo: {
    alignSelf: 'center',
    height: '80%',
    width: '80%',
  },
  mobileLogoContainer: {
    height: 150,
    width,
  },
});

export default styles;