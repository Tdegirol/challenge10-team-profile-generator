const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('TJ', 000, 'tj@email.com','Employee')
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect('Employee'));
})

test('Tests methods for class', () => {
    const employee = new Employee('TJ', 000, 'tj@email.com','Employee');

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
    expect(employee.getRole()).toEqual(employee.role);
})