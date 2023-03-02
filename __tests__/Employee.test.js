const Employee = require('../lib/Employee');

test('creates an employee object with name', () => {
    const employee = new Employee('Matthew', 1, 'matt@gmail.com'); 
    expect(employee.name).toBe('Matthew');
});

test('creates an employee object with id', () => {
    const employee = new Employee('John', 2, 'John@gmail.com');
    expect(employee.id).toEqual(2); 
});

test('creates an employee object with email', () => {
    const employee = new Employee('Erin', 3, 'Erin@gmail.com');
    expect(employee.email).toEqual('Erin@gmail.com');
});

test('creates an employee object with role', () => {
    const employee = new Employee('Sarah', 4, 'Sarah@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});
