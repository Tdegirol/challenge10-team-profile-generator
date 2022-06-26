const Engineer = require('../lib/Engineer');

test('Creates new Engineer', () => {
    const engineer = new Engineer('TJ', 123, 'tj@email.com','tjdeg','Engineer');
    expect(typeof(engineer.name)).toBe("string");
    expect(typeof(engineer.id)).toBe("number");
    expect(typeof(engineer.email)).toBe("string");
    expect(typeof(engineer.github)).toBe("string");
    expect(typeof(engineer.role)).toBe("string");
})

test('Tests methods for class', () => {
    const engineer = new Engineer('TJ', 123, 'tj@email.com','tjdeg','Engineer');

    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);
    expect(engineer.getGithub()).toEqual(engineer.github);
    expect(engineer.getRole()).toEqual(engineer.role);
})