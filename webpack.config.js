module.exports = {
  target: "node",

  // TODO: Handle 'production' mode
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  resolve: {
    // 'Absolute imports'
    modules: ["src", "node_modules"],
  },
  watch: true,
};
