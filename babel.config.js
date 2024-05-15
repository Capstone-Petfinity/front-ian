module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      ['react-refresh/babel'],
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
          path: '.env',
        },
      ],
    ],
  };
};

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     ['react-refresh/babel'],
//     [
//       'module:react-native-dotenv',
//       {
//         moduleName: 'react-native-dotenv',
//         path: '.env',
//       },
//     ],
//   ],
// };
