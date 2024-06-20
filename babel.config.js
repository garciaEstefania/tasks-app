module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '~assets': './src/assets',
          '~components': './src/components',
          '~interfaces': './src/interfaces',
          '~navigation': './src/navigation',
          '~redux': './src/redux',
          '~screens': './src/screens',
        },
      },
    ],
  ],
};
