// task 13.4

const filterFoodPrice = require("./food")

const food = [
    {kind: 'potato', price: 10},
    {kind: 'bred', price: 16},
    {kind: 'pepper', price: 27},
    {kind: 'banana', price: 13},
    {kind: 'lemon', price: 50}
    ];

const length =  food.length;
const min = 12;
const max = 40;

test('verify that length of sorted array corresponds to the actual length', () => {
    expect(filterFoodPrice(food, min, max)).toHaveLength(3);
});

test('verify that sorted array contains the object { kind: "pepper", price: 27 }', () => {
    expect(filterFoodPrice(food, min, max)).toContainEqual({kind: 'pepper', price: 27});
});

test('verify that sorted array contains 2, 3, and 4 elements of the original food array', () => {
    expect(filterFoodPrice(food, min, max)).toEqual(food.slice(1, 4));
});

test('verify that the price property of the 1st element of the sorted array is greater than min', () => {
    expect(filterFoodPrice(food, min, max)[0].price).toBeGreaterThan(min);
});

test('verify that the price property of the 3rd element of the sorted array is less than max', () => {
    expect(filterFoodPrice(food, min, max)[2].price).toBeLessThan(max);
});

test('verify that the sorted array does not contain the element { kind: "lemon", price: 50 }', () => {
    expect(filterFoodPrice(food, min, max)).not.toContainEqual({kind: 'lemon', price: 50});
});

test('verify that length of sorted array is less than or equal length of the original food array', () => {
    expect(filterFoodPrice(food, min, max).length).toBeLessThanOrEqual(length);
});

test('verify that 1st element of sorted array has property "kind"', () => {
    expect(filterFoodPrice(food, min, max)[0]).toHaveProperty('kind');
});

test('verify that kind value of 1st element of sorted array is in lowercase latters', () => {
    expect(filterFoodPrice(food, min, max)[0].kind).toMatch(/[a-z]/);
});

expect.extend({
    toHavePriceInRange(product, min, max) {
      const pass = (product.price >= min && product.price <= max);
      if (pass) {        
        return {
            message: () => `expected ${product.price}} price is in range [${min}, ${max}]`,
            pass: true,
        };
      } else {
        return {
          message: () => `expected ${product.price} price should be in range [${min}, ${max}]`,
          pass: false,
        };
      }
    },
});


test('verify that 2nd element of sorted array has price in range [min, max]', () => {   
    expect(filterFoodPrice(food, min, max)[1]).toHavePriceInRange(min, max);
});
