const mongoose = require('mongoose');
require('./config/db');


//Importación de la librería para servidor
const { request, response } = require('express');
const express = require('express');
const router = require("./routes");
const exphbs = require("express-handlebars");
const path = require('path');
//Firmar las sesiones y poderlas guardar en mongo
const cookieparser = require('cookie-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo').default;

//Asociar las variables.env
require('dotenv').config({ path: 'variables.env' });

//Asociar express a una variable de trabajo local
const app = express();




//asociar Handlebars template engine
app.engine('handlebars', exphbs({ defaultLayout: 'layout', helpers: require('./helpers/handlebars') }));

//Asociar a la vista de mi applicacion(handlebars)
app.set('view engine', 'handlebars');

//Asociar carpeta publi con css
app.use(express.static(path.join(__dirname, 'public')));
//abrimos sesion con cookieparser
app.use(cookieparser());

app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({ mongoUrl: process.env.DATABASE })
}));

//construir el servidor 
app.use('/', router());


//Puerto para el servidor
app.listen(process.env.PUERTO);