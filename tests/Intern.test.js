const Intern = require('../lib/Intern');

test('Creates new Intern', () => {
    const intern = new Intern('TJ', 000, 'tj@email.com','Intern')
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect('Intern'));
})

test('Tests methods for class', () => {
    const intern = new Intern('TJ', 000, 'tj@email.com','Intern');

    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);
    expect(intern.getRole()).toEqual(intern.role);
})