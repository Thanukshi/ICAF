// Test Cases for check Match Password
const isMatch = require('../Register/validation/validation');

test('isEmpty', () => {
    expect(isMatch("@bC123456", "@bC123456")).toBeTruthy();
});
