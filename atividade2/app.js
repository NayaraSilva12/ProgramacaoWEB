const testRoutes = require('./routes/testRoute');
const express = require("express");
const app = express();
const userRoute = requiere('/routes/userRoute');


app.use(express.json());
app.use('/api', testRoutes);
app.use('/api', userRoute);

module.exports = app;