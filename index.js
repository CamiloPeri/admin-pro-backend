require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

const app = express();
// Base de datos //
dbConnection();

//Confogurar cors //

app.use(cors());

app.get('/', (req, res) => {
  res.status(400).json({
    ok: true,
    msg: 'Hola mundo',
  });
});
app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en puesrto ' + process.env.PORT);
});

// gE2kL8AbSOBx6kXu;
//mean_user
