module.exports = {
  apps : [{
    name: 'lourdescr',
    script: './node_modules/gatsby/cli.js',
    args: 'serve',
    exec_mode : 'cluster', // enables clustering
    instances: 'max',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};