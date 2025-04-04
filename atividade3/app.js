const express = require("express");
const app = express();
const sequelize = require('./config/config');
const testRoutes = require('./routes/testRoute');
const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use('/api', testRoutes);
app.use('/api', userRoute);


sequelize.sync().then(
    () => {console.log('Databse connected and synced');}
).catch(
    (error) => {console.log('Error Databse: ', error);}
);

module.exports = app;