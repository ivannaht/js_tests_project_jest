// task 13.1

const sum = require("./sum")

test('verify adding floating point numbers', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

