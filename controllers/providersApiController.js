const fetch = require('node-fetch');
const Provider = require('../models/providers');

const getProviders = async (req,res) => {
    if (req.params.id) { // con ID
        try {
            let providers = await Provider.find({id:req.params.id},'-_id -__v'); //[{}]
            res.status(200).json(providers[0]); // Respuesta de la API para 1 producto {}
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({
                msj: `ERROR: ${error}`
            });
        }
    } else { // sin ID --> TODOS los products
        try {
            let providers = await Provider.find({},'-_id -__v'); // []
            res.status(200).json(providers); // Respuesta de la API para muchos productos
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({
                msj: `ERROR: ${error}`
            });
        }
    }
}

const createProvider = async (req,res) => {

    const newProvider = req.body; // {} nuevo producto a guardar

    try {
        let response = await new Provider(newProvider); // objeto de vuelta de la petición
        let answer = await response.save(); // Guardar en la BBDD
    
        res.status(201).json({
            msj: `Proveedor creado, proveedor: ${answer}`,
        });
    }        
    
    catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(400).json({
            msj: `ERROR: ${error}`
        });
    }
}

module.exports = {
    createProvider,
    getProviders
}