'use strict';

const express = require('express');
const { userRoutes, expenseRoutes } = require('./routes');

function createServer() {
  const app = express();

  app.use(express.json());

  app.use('/users', userRoutes);
  app.use('/expenses', expenseRoutes)

  return app;
}

module.exports = {
  createServer,
};
