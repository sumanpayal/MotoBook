module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@fonts': './src/assets/images',
          '@lottie': './src/assets/lottie',
          '@images': './src/assets/images',
          '@svg': './src/assets/svg',
          '@components': './src/common/components',
          '@commonStyles': './src/common/styles',
          '@network': './src/network',
          '@utils': './src/common/utils',
          '@storage': './src/common/storage',
          '@constants': './src/common/constants',
          '@reducers': './src/redux/reducers',
          '@store': './src/redux/store',
        },
      },
    ],
  ],
};
