module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          'app': './src/app',
          'assets': ['./assets'],
          'components': './src/components',
          'constants': './src/constants',
          'features': './src/features/',
          'lib': './src/lib',
          'screens': './src/screens',
          'themes': './src/themes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};