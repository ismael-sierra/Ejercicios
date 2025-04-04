const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ismaelsierra:admin1234@cluster0.4ryfg.mongodb.net/mongo_db?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Conexión a la base de datos establecida correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        process.exit(1);
    }
};

module.exports = connectDB; 