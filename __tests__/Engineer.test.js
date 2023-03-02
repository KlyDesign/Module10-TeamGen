const Engineer = require('../lib/Engineer');

test('creates an engineer object with name', () => {
    const engineer = new Engineer('Matthew', 1, 'matthew@gmail.com', 'antghergithub');
    expect(engineer.name).toBe('Matthew');
});

test('creates an engineer object with id', () => {
    const engineer = new Engineer('John', 2, 'john@gmail.com' , 'johnGithub');
    expect(engineer.id).toEqual(2);
});

test('creates an engineer object with email', () => {
    const engineer = new Engineer('Erin', 3, 'erin@gmail.com', 'gitsarefun');
    expect(engineer.email).toEqual('erin@gmail.com');
});

test('creates an engineer object with role', () => {
    const engineer = new Engineer('Sarah', 4, 'sarah@gmail.com', 'coolgit');
    expect(engineer.getRole()).toEqual('Engineer');
});

test('creates an engineer object with github', () => {
    const engineer = new Engineer('Jimmy', 5, 'jimmy@gmail.com', 'jimmyGithubsdesign');
    expect(engineer.github).toEqual('jimmyGithubsdesign');
});
