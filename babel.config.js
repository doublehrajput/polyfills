module.exports = {
  presets: [['@babel/preset-env']],
  plugins: [],
  env: {
    testing: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  }
};
