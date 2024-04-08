// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/api', // Specify the route you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000', // Your backend server URL
      changeOrigin: true, // Change the origin of the request
    })
  );
};
