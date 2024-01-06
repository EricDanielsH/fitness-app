module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      "nativewind/babel",
      "module:react-native-dotenv",
      "react-native-reanimated/plugin", // Has to be the last item in the list
    ],
  };
};
