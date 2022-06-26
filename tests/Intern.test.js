const Intern = require('../lib/Intern');

test('Creates new Intern', () => {
    const intern = new Intern('TJ', 123, 'tj@email.com','Stevens','Intern')
    expect(typeof(intern.name)).toBe("string");
    expect(typeof(intern.id)).toBe("number");
    expect(typeof(intern.email)).toBe("string");
    expect(typeof(intern.school)).toBe("string");
    expect(typeof(intern.role)).toBe("string");
})

test('Tests methods for class', () => {
    const intern = new Intern('TJ', 123, 'tj@email.com','Stevens','Intern');

    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);
    expect(intern.getSchool()).toEqual(intern.school);
    expect(intern.getRole()).toEqual(intern.role);
})