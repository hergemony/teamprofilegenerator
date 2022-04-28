const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('manager office number', () => {
    const value = 100;
    const manager = new Manager('Sandy', 1, "sandy@email.com", value);
    expect(manager.getOfficeNumber()).toBe(value);
});
test('set new role', () => {
    const value = "Manager";
    const manager = new Manager('Sandy', 1, "sandy@email.com", 100);
    expect(manager.getRole()).toBe(value);
});