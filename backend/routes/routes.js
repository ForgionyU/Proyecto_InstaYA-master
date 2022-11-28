import express from 'express';
import {createEnvio, deleteEnvio, getAllEnvios, getEnvio, updateEnvio} from '../controllers/controller.js';

const router = express.Router();

//enrutamientos
//para mostrar todos los envios
router.get('/', getAllEnvios);
//mostrar un solo envio buscado por id
router.get('/:id', getEnvio);
//crear un envio
router.post('/', createEnvio);
//actualizar un envio
router.put('/:id', updateEnvio);
//borrar un envio
router.delete('/:id', deleteEnvio);



export default router;

