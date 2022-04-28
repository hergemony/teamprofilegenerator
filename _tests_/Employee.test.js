const Employee = require('../lib/Employee');

describe('Employee', () => {

    test('create employee', () => {
        const employee = new Employee('Chris');
    });
    test('set id',  () => {
        const value = 100000;
        const employee = new Employee('Chris', value);
        expect(employee.id).toBe(value);
    });
    test('set email', () => {
        const value = 'somebody@email.com';
        const employee = new Employee('Chris', 1, value);
        expect(employee.email).toBe(value);
    });
    test('set role', () => {
        const value = 'Employee';
        const employee = new Employee('Chris', 1, 'somebody@email.com');
        expect(employee.getRole()).toBe(value);
    });
})