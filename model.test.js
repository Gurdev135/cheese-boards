const sequelize = require('./connection');
const { User, Cheese, Board } = require('./model');

// User Model Test Suite
describe('User model', () => {

  // Before all tests in this suite, sync the database
  beforeAll(async () => {
    await sequelize.sync();
  });

  // After each test in this suite, delete all records from the User model
  afterEach(async () => {
    await User.destroy({ where: {} });
  });

  // After all tests in this suite, sync the database again to clear all tables
  afterAll(async () => {
    await sequelize.sync();
  });

  // Test if a new User can be created and saved to the database
  it('can create a new user', async () => {
    const user = await User.create({ name: 'John Doe', email: "Test@test.com" });
    expect(user.name).toEqual('John Doe');
    expect(user.email).toEqual('Test@test.com');
  });
});

// Cheese Model Test Suite
describe('Cheese model', () => {

    // Before all tests in this suite, sync the database
    beforeAll(async () => {
      await sequelize.sync();
    });
  
    // After each test in this suite, delete all records from the Cheese model
    afterEach(async () => {
      await Cheese.destroy({ where: {} });
    });
  
    // After all tests in this suite, sync the database again to clear all tables
    afterAll(async () => {
      await sequelize.sync();
    });
  
    // Test if a new Cheese can be created and saved to the database
    it('can create a new cheese', async () => {
      const cheese = await Cheese.create({ title: 'Blue', description: "Smells Awful" });
      expect(cheese.title).toEqual('Blue');
      expect(cheese.description).toEqual('Smells Awful');
    });
});

// Board Model Test Suite
describe('Board model', () => {

    // Before all tests in this suite, sync the database
    beforeAll(async () => {
      await sequelize.sync();
    });
  
    // After each test in this suite, delete all records from the Board model
    afterEach(async () => {
      await Board.destroy({ where: {} });
    });
  
    // After all tests in this suite, sync the database again to clear all tables
    afterAll(async () => {
      await sequelize.sync();
    });
  
    // Test if a new Board can be created and saved to the database
    it('can create a new board', async () => {
      const board = await Board.create({ type: 'Blue', description: "Smells Awful", rating: 0 });
      expect(board.type).toEqual('Blue');
      expect(board.description).toEqual('Smells Awful');
      expect(board.rating).toEqual(0)
    });
});
