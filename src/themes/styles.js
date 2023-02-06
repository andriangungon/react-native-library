import {
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';

import colors from './colors';

const center = {
  alignItems: 'center',
  justifyContent: 'center',
};
const overlay = {
  backgroundColor: 'rgba(255,255,255,0.6)',
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
};
const spinnerCommon = Platform.select({
  ios: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 4,
    height: 60,
    top: height * 0.38,
    width: 60,
    zIndex: 1000,
  },
  android: {
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 2,
    height: 45,
    top: height * 0.4,
    width: 45,
  },
});
const variables = {
  text3: {
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
  },

  smallGutter: 5,
  mediumGutter: 15,
  largeGutter: 30,
  extraLargeGutter: 45,
};

const calculateLineHeight = (fontSize) => fontSize * 1.5;

export const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 5,
    ...center,
  },
  caption2: {
    color: '#828282',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
  },
  horizontalCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  center: { ...center },
  alignCenter: { alignSelf: 'center' },
  alignLeft: { alignSelf: 'flex-start' },

  // Custom Spinner
  spinnerContainer: {
    alignSelf: 'center',
    position: 'absolute',
    ...center,
    ...spinnerCommon,
  },
  spinnerLabelWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1000,
  },
  spinnerLabelContainer: {
    ...center,
    ...spinnerCommon,
    ...Platform.select({
      ios: {
        top: height * 0.33,
        zIndex: 1000,
      },
      android: {
        elevation: 5,
        top: height * 0.35,
      },
    }),
    alignSelf: 'center',
  },
  spinnerLabel: {
    ...center,
    ...Platform.select({
      ios: {
        top: height * 0.33,
        zIndex: 1000,
      },
      android: {
        elevation: 5,
        top: height * 0.35,
      },
    }),
    backgroundColor: 'red',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    maxWidth: 320,
  },
  spinnerOverlay: {
    ...overlay,
    zIndex: 999,
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  fullWindowDimension: {
    height,
    width,
  },
  // Gutters
  lgGutter: {
    padding: variables.largeGutter,
  },
  lgGutterBottom: {
    paddingBottom: variables.largeGutter,
  },
  lgGutterBottomLgHorizontal: {
    paddingBottom: variables.largeGutter,
    paddingHorizontal: variables.largeGutter,
  },
  lgGutterHorizontal: {
    paddingHorizontal: variables.largeGutter,
  },
  lgGutterLeft: {
    paddingLeft: variables.largeGutter,
  },
  lgGutterTop: {
    paddingTop: variables.largeGutter,
  },
  lgGutterTopMdHorizontal: {
    paddingHorizontal: variables.mediumGutter,
    paddingTop: variables.largeGutter,
  },
  lgGutterTopLgHorizontal: {
    paddingHorizontal: variables.largeGutter,
    paddingTop: variables.largeGutter,
  },
  lgGutterRight: {
    paddingRight: variables.largeGutter,
  },
  lgGutterVertical: {
    paddingVertical: variables.largeGutter,
  },
  lgGutterVerticalMdHorizontal: {
    paddingHorizontal: variables.mediumGutter,
    paddingVertical: variables.largeGutter,
  },
  mdGutter: {
    padding: variables.mediumGutter,
  },
  mdGutterBottom: {
    paddingBottom: variables.mediumGutter,
  },
  mdGutterBottomSmTop: {
    paddingBottom: variables.mediumGutter,
    paddingTop: variables.smallGutter,
  },
  mdGutterBottomMdHorizontal: {
    paddingBottom: variables.mediumGutter,
    paddingHorizontal: variables.mediumGutter,
  },
  mdGutterHorizontal: {
    paddingHorizontal: variables.mediumGutter,
  },
  mdGutterLeft: {
    paddingLeft: variables.mediumGutter,
  },
  mdGutterRight: {
    paddingRight: variables.mediumGutter,
  },
  mdGutterTop: {
    paddingTop: variables.mediumGutter,
  },
  mdGutterTopLgBottom: {
    paddingBottom: variables.largeGutter,
    paddingTop: variables.mediumGutter,
  },
  mdGutterTopSmBottom: {
    paddingBottom: variables.smallGutter,
    paddingTop: variables.mediumGutter,
  },
  mdGutterTopMdHorizontal: {
    paddingHorizontal: variables.mediumGutter,
    paddingTop: variables.mediumGutter,
  },
  mdGutterTopLgHorizontal: {
    paddingHorizontal: variables.largeGutter,
    paddingTop: variables.mediumGutter,
  },
  mdGutterVertical: {
    paddingVertical: variables.mediumGutter,
  },
  mdGutterVerticalSmHorizontal: {
    paddingHorizontal: variables.smallGutter,
    paddingVertical: variables.mediumGutter,
  },
  smGutter: {
    padding: variables.smallGutter,
  },
  mdxGutter: {
    padding: 10,
  },
  smGutterBottom: {
    paddingBottom: variables.smallGutter,
  },
  smGutterBottomMdHorizontal: {
    paddingBottom: variables.smallGutter,
    paddingHorizontal: variables.mediumGutter,
  },
  smGutterBottomSmHorizontal: {
    paddingBottom: variables.smallGutter,
    paddingHorizontal: variables.smallGutter,
  },
  smGutterHorizontal: {
    paddingHorizontal: variables.smallGutter,
  },
  smGutterLeft: {
    paddingLeft: variables.smallGutter,
  },
  smGutterRight: {
    paddingRight: variables.smallGutter,
  },
  smGutterTop: {
    paddingTop: variables.smallGutter,
  },
  smGutterVertical: {
    paddingVertical: variables.smallGutter,
  },
  smGutterVerticalMdHorizontal: {
    paddingHorizontal: variables.mediumGutter,
    paddingVertical: variables.smallGutter,
  },
  smGutterVerticalMdRight: {
    paddingRight: variables.mediumGutter,
    paddingVertical: variables.smallGutter,
  },
  xlgGutterBottomMdGutterTop: {
    paddingBottom: 75,
    paddingTop: variables.mediumGutter,
  },
  xlgGutterBottom: {
    paddingBottom: 75,
  },

  smMargin: {
    margin: variables.smallGutter,
  },
  smMarginHorizontal: {
    marginHorizontal: variables.smallGutter,
  },
  smMarginRight: {
    marginRight: variables.smallGutter,
  },
  smMarginVertical: {
    marginVertical: variables.smallGutter,
  },
  mdMarginHorizontal: {
    marginHorizontal: variables.mediumGutter,
  },
  mdMarginTop: {
    marginTop: variables.mediumGutter,
  },
  mdMarginRight: {
    marginRight: variables.mediumGutter,
  },
  mdMarginBottom: {
    marginBottom: variables.mediumGutter,
  },
  lgMarginBottom: {
    marginBottom: variables.largeGutter,
  },
  lgMarginHorizontal: {
    marginHorizontal: variables.largeGutter,
  },
  lgMarginTop: {
    marginTop: variables.largeGutter,
  },
  xlgMarginBottom: {
    marginBottom: 80,
  },

  caption1: {
    color: '#828282',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
  },
  caption3: {
    color: '#828282',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
  },
  flexRowVerticalCenter: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  horizontalStretch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalStretchCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  separator: {
    backgroundColor: '#F2F2F2',
    height: 1,
    marginHorizontal: 10,
  },
  text3: {
    ...variables.text3,
    lineHeight: calculateLineHeight(variables.text3.fontSize),
    textTransform: 'capitalize',
  },
  searchBarCloseButton: {
    ...center,
    borderRadius: 20,
    height: 40,
    width: 40,
  },

  // alignment
  textAlignCenter: { textAlign: 'center' },

  // input
  errorInput: {
    borderColor: colors.danger,
  },
  errorText: {
    fontSize: 10,
    color: colors.danger,
    paddingBottom: 8,
  },
  textInput: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingLeft: 16,
    marginBottom: 16,
  },
  textInput2: {
    height: 38,
    backgroundColor: 'white',
    marginBottom: 16,
  },

  // heading
  heading1: {
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 28,
  },
  heading2: {
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 26,
  },
  heading3: {
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
  },
  heading4: {
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
  },
  heading5: {
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
  },
});

export default styles;