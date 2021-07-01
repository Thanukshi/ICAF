// Test Cases for check password
const isPassword = require('../Register/validation/validation');

test('isPassword', () => {
    const value = isPassword("1234");
    expect(value).toBe(false);
});

