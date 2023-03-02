const Manager = require('../lib/Manager');

test('creates a manager object with name', () => {
    const manager = new Manager('Matthew', 1, 'matthew@gmail.com', '1');
    expect(manager.name).toBe('Matthew');
});

test('creates a manager object with id', () => {
    const manager = new Manager('John', 2, 'john@gmail.com' , '2');
    expect(manager.id).toEqual(2);
});

test('creates a manager object with email', () => {
    const manager = new Manager('Erin', 3, 'erin@gmail.com', '3');
    expect(manager.email).toEqual('erin@gmail.com');
});

test('creates a manager object with role', () => {
    const manager = new Manager('Sarah', 4, 'sarah@gmail.com', 4);
    expect(manager.getRole()).toEqual('Manager');
});

test('creates a manager object with office number', () => {
    const manager = new Manager('Jimmy', 5, 'jimmy@gmail.com', 5);
    expect(manager.officeNumber).toEqual(5);
});
