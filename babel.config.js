module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@assets": "./assets",
            "@images": "./assets/images",
            "@database": "./database",
            "@views": "./src/views",
            "@navigation": "./navigation",
            "@fonts": "./assets/fonts"
          }          
        }
      ]
    ]
  };
};
