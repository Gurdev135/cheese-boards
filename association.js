const {User, Board, Cheese} = require('./model')

// Define a one-to-many relationship between User and Board
User.hasMany(Board); // A User has many Boards
Board.belongsTo(User); // A Board belongs to a User

// Define a many-to-many relationship between Board and Cheese
Board.belongsToMany(Cheese, { through: 'BoardCheese' }); // A Board can have many Cheeses through the BoardCheese table
Cheese.belongsToMany(Board, { through: 'BoardCheese' }); // A Cheese can be on many Boards through the BoardCheese table
