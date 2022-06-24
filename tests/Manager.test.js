const Manager = require('../lib/Manager');

test('Creates new Manager', () => {
    const manager = new Manager('TJ', 000, 'tj@email.com','Manager')
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect('Manager'));
})

test('Tests methods for class', () => {
    const manager = new Manager('TJ', 000, 'tj@email.com','Manager');

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
    expect(manager.getRole()).toEqual(manager.role);
})