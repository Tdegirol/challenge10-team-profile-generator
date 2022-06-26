const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('TJ', 123, 'tj@email.com',"Employee")
    expect(typeof(employee.name)).toBe("string");
    expect(typeof(employee.id)).toBe("number");
    expect(typeof(employee.email)).toBe("string");
    expect(typeof(employee.role)).toBe("string");
})

test('Tests methods for class', () => {
    const employee = new Employee('TJ', 123, 'tj@email.com',"Employee");

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
    expect(employee.getRole()).toEqual(employee.role);
})