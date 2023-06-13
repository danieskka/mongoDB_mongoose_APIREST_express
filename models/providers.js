const mongoose = require('mongoose');

const objectSchema = {
    id: {
        type: Number,
        required: true,
        unique: true
    },
    
    company_name: { 
        type: String, 
        required: true,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web: { 
        type: String, 
        required: true 
    },
};
// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;