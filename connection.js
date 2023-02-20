const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite', // Use the SQLite database
    storage: './db.sqlite' // Use the file `db.sqlite` as the database
});

// Export the sequelize instance as a module
module.exports = sequelize;
