const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer', () => {

    test('engineer extend employee', () => {
        const engineer = new Engineer('Michelle');
    });
    test('set github', () => {
        const value = "github";
        const engineer = new Engineer('Michelle', 1, 'michelle@email.com', value);
        expect(engineer.github).toBe(value);
    });
    test('set new role', () => {
        const value = 'Engineer';
        const engineer = new Engineer('Michelle', 1, 'michelle@email.com', 'mblackGitHub');
        expect(engineer.getRole()).toBe(value);
    });
})