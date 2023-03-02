const Intern = require('../lib/Intern');

test('creates an intern object with name', () => {
    const intern = new Intern('Matthew', 1, 'matthe@gmail.com', 'UT');
    expect(intern.name).toBe('Matthew');
});

test('creates an intern object with id', () => {
    const intern = new Intern('John', 2, 'john@gmail.com' , 'Boulder');
    expect(intern.id).toEqual(2);
});

test('creates an intern object with email', () => {
    const intern = new Intern('Erin', 3, 'erin@gmail.com' , 'VT');
    expect(intern.email).toEqual('erin@gmail.com');
});

test('creates an intern object with school', () => {
    const intern = new Intern('Jimmy', 5, 'jimmy@gmail.com', 'UT');
    expect(intern.school).toEqual('UT');
});

test('creates an intern object with role', () => {
    const intern = new Intern('Sarah', 4, 'sarah@gmail.com' , 'Berkley');
    expect(intern.getRole()).toEqual('Intern');
});