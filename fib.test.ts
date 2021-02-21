import { fibNum } from './fib';

test('0th Fibonacci number is 0', () => {
    expect(fibNum(0)).toBe(0);
});

test('1st Fibonacci number is 1', () => {
    expect(fibNum(1)).toBe(1);
});

test('2nd Fibonacci number is 1', () => {
    expect(fibNum(2)).toBe(1);
});

test('3rd Fibonacci number is 2', () => {
    expect(fibNum(3)).toBe(2);
});

test('4th Fibonacci number is 3', () => {
    expect(fibNum(4)).toBe(3);
});

test('5th Fibonacci number is 5', () => {
    expect(fibNum(5)).toBe(5);
});

test('8th Fibonacci number is 21', () => {
    expect(fibNum(8)).toBe(21);
});

test('20th Fibonacci number is 6765', () => {
    expect(fibNum(20)).toBe(6765);
})