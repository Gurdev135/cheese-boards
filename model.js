// Importing the required modules
const { DataTypes } = require("sequelize")
const sequelize = require('./connection');

// Defining the User model
const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
})

// Defining the Cheese model
const Cheese = sequelize.define('Cheese', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
})

// Defining the Board model
const Board = sequelize.define('Board', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER
});

// Establishing the model associations
User.hasMany(Board);  // A user can have many boards
Board.belongsTo(User); // A board belongs to a user

Board.belongsToMany(Cheese, { through: 'BoardCheese' });  // A board can have many cheeses, and a cheese can be on many boards
Cheese.belongsToMany(Board, { through: 'BoardCheese' });  // A cheese can be on many boards, and a board can have many cheeses

// Exporting the models
module.exports = { User, Cheese, Board };
