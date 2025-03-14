const testRoutes = require('./routes/testRoute');
const express = require("express");
const app = express();



app.use(express.json());
app.use('/api', testRoutes);

module.exports = app;