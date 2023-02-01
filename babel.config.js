module.exports = function (api) {
  api.cache(true);

  return {
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
            'customers': './src/features/customers',
            'members/*': ['./src/features/members'],
            'features': './src/features/',
            'randomizer': './src/features/randomizer',
            'lib': './src/lib',
            'screens': './src/screens',
            'themes': './src/themes',
          },
        },
      ],
    ],
  };
};