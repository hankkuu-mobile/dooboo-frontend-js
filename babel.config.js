module.exports = {
  'presets': [
    ['@babel/preset-env', { 'modules': false }],
    '@babel/preset-react',
    '@babel/preset-flow'
  ],
  'env': {
    'test': {
      'presets': [['@babel/preset-env'], '@babel/preset-react']
    }
  },
  'plugins': [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    [
      '@babel/plugin-transform-runtime',
      {
        'helpers': true,
        'regenerator': false
      }
    ]
  ]
};
