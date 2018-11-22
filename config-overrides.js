const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        // ["module-resolver", {
        //     "root": ["./"]
        //     }],
        config,
    );
    // do stuff with the webpack config...
    return config;
  };