const Intern = require('../lib/Intern');

test('can get school from input', () => {
    const testValue = "Duke";
    const i = new Intern('Anasia', 1, "email@email.com", testValue);
    expect(i.school).toBe(testValue);
});

test('getRole will return "Intern"', () => {
    const testValue = 'Intern';
    const i = new Intern("Anasia", 1, 'email@email.com', testValue);
    expect(i.getRole()).toBe(testValue);
});

test('can get school with getSchool()', () => {
    const testValue = "Duke";
    const i = new Intern("Anasia", 1, "email.email.com", testValue);
    expect(i.getSchool()).toBe(testValue);
});