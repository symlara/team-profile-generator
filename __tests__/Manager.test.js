const Manager = require('../lib/Manager');

test("can create manager's office number", () => {
    const testValue = 500;
    const i = new Manager('Terrance', 1, "email@email.com", testValue);
    expect(i.officeNumber).toBe(testValue);
});

test('getRole() will return Manager ', () => {
    const testValue = "Manager";
    const i = new Manager('Aaliyah', 1, "email@email.com", 200);
    expect(i.getRole()).toBe(testValue);
});

test('can grab office number from getOffice()', () => {
    const testValue = 100;
    const i = new Manager('Alex', 1, "email@email.com", testValue);
    expect(i.getOfficeNumber()).toBe(testValue);
});