const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#d5a944',
              '@font-family': 'Open Sans',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};