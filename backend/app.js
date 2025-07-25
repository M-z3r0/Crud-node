const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/courseRoutes');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/cursos',routes);
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})