const { describe, it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe("Employee", () => {
test('Can create employee instance', () => {
    const i = new Employee();
    expect(typeof(i)).toBe('object');
});

test('checks for a name', () => {
    const name = 'Angel';

    const i = new Employee(name);
    expect(i.name).toBe(name);
});

test('checks for an id value', () => {
    const id = 500;
    const i = new Employee("Ally", id);
    expect(i.id).toBe(id);
});


it("checks for an email value", () => {
    const testValue = "email@email.com";
    const e = new Employee("Alex", 1, testValue);
    expect(e.email).toBe(testValue);
});

describe('getName', () => {
    it('can grab a name from getName()', () => {
        const value = 'Aaliyah';
        const i = new Employee(value);
        expect(i.getName()).toBe(value);
    });
});

describe("getId", () => {
    it('can grab an id from getId()', () => {
        const testValue = 200;
        const i = new Employee("Alexandra", testValue);
        expect(i.getId()).toBe(testValue);
    });
});

describe("getEmail", () => {
    it('can grab an email from getEmail', () => {
        const testValue = 'email@email.com';
        const i = new Employee('tester', 2, testValue);
        expect(i.getEmail()).toBe(testValue);
    });
});

describe("getRole", () => {
    it('this method should return "Employee"', () => {
        const testValue = "Employee";
        const i = new Employee('Aaliyah', 3, "email@email.com");
        expect(i.getRole()).toBe(testValue);
    });
});

});