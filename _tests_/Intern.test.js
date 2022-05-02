const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('set school', () => {
    const value = 'Yale';
    const intern = new Intern('Dutch', 1, 'dutch@ElementInternls.com', value);
    expect(intern.school).toBe(value);
});
test('getSchool()', () => {
    const value = 'Yale';
    const intern = new Intern('Dutch', 1, 'dutch@ElementInternals.com', value);
    expect(intern.getSchool()).toBe(value);
});
test('set new role', () => {
    const value = 'Intern';
    const intern = new Intern('Dutch', 1, 'dutch@ElementInternals.com', 'Yale');
    expect(intern.getRole()).toBe(value);
});