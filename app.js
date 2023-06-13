const express = require('express')
const cowsay = require('cowsay')

require('./utils/db_mongo') // Conexión a BBDD MongoDB

const morgan = require('./utils/morgan')
const error404 = require('./middlewares/error404')

// Módulos de Rutas
const productsApiRoutes = require('./routes/productsApiRoutes')
const providersApiRoutes = require('./routes/providersApiRoutes')

const app = express()
const port = 3000

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

//Rutas 
app.use('/api/products',productsApiRoutes); // Rutas web API products
app.use('/api/providers', providersApiRoutes)
app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`,
            e: "oO",
            T: "U "
        }))
})