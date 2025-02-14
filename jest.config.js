module.exports = {
  preset: "expo/jest",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@expo|expo(nent)?|@unimodules|unimodules|sentry-expo|native-base)",
  ],
};
