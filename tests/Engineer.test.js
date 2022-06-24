const Engineer = require('../lib/Engineer');

test('Creates new Engineer', () => {
    const engineer = new Engineer('TJ', 000, 'tj@email.com','Engineer')
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect('Engineer'));
})

test('Tests methods for class', () => {
    const engineer = new Engineer('TJ', 000, 'tj@email.com','Engineer');

    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);
    expect(engineer.getRole()).toEqual(engineer.role);
})