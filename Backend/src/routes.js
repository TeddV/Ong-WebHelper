const express = require('express');

const OngController = require('./controllers/OngController')
const CasoController = require('./controllers/CasoController');
const PerfilOngController = require('./controllers/PerfilOngController');
const SecaoController = require('./controllers/SecaoController');


const routes = express.Router();

routes.post('/secao', SecaoController.create);

routes.get('/ongs', OngController.index); 
routes.post('/ongs', OngController.create);

routes.get('/perfil', PerfilOngController.index);

routes.get('/caso', CasoController.index);
routes.post('/caso', CasoController.create);
routes.delete('/caso/:id',CasoController.delete);


module.exports = routes;