// Test Cases for check Email
const isEmail = require('../Register/validation/validation');

test('isEmail', () => {
    const value = isEmail("testgmailcom");
    expect(value).toBe(false);
});

