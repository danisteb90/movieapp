// filepath: c:\Esteban\1_Coding-Projects\18_rn-movie-app\metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Agregar alias para "@"
config.resolver.alias = {
  "@": path.resolve(__dirname, "./"),
};

module.exports = withNativeWind(config, { input: "./app/globals.css" });
