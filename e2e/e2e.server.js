const webpack = require ('webpack');
const WebpackDevServer = require ('webpack-dev-server');
const config = require ('../webpack.common.config.js');

const compiler = webpack(config);

// Настройки dev-server
const serverConfig = {
    port: 9000,
    host: 'localhost',
    open: true, // Автоматически открыть браузер
    hot: true,  // Включить горячую замену модулей (HMR)
  };
  
  const server = new WebpackDevServer(serverConfig, compiler);
  
  // Запуск сервера
  server.start().then(() => {
    console.log('Server is running on http://localhost:9000');
  }).catch((err) => {
    console.error('Failed to start server:', err);
  });