// const presets = ["@babel/preset-env"];
module.exports = function (api) { // eslint-disable-line
  const env = api.env();
  const presets = [["@babel/preset-env"]];
  const plugins = [["@babel/plugin-transform-runtime", { "corejs": 2 }]];

  return {
    presets,
    plugins
  }
};
