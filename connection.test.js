const { Sequelize } = require('sequelize');

// Define a test suite for the database connection
describe('Sequelize connection', () => {
  // Define a single test case
  it('should connect to the database', async () => {
    // Create a new Sequelize instance with SQLite database options
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './db',
    });

    try {
      // Test the connection to the database
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });
});
