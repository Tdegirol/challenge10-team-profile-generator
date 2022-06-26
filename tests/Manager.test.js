const Manager = require('../lib/Manager');

test('Creates new Manager', () => {
    const manager = new Manager('TJ', 123, 'tj@email.com',1234567,'Manager')
    expect(typeof(manager.name)).toBe("string");
    expect(typeof(manager.id)).toBe("number");
    expect(typeof(manager.email)).toBe("string");
    expect(typeof(manager.officeNumber)).toBe("number");
    expect(typeof(manager.role)).toBe("string");
})

test('Tests methods for class', () => {
    const manager = new Manager('TJ', 123, 'tj@email.com',1234567,'Manager');

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
    expect(manager.getRole()).toEqual(manager.role);
})