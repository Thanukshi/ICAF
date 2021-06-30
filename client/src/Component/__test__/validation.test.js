const isEmpty = require('../Register/validation/validation');

test('isEmpty', () => {
    expect(isEmpty()).toBeTruthy();
});