import { fibNum } from './fib';

test('0th Fibonacci number is 0', () => {
    expect(fibNum(0)).toBe(0);
});

test('1st Fibonacci number is 1', () => {
    expect(fibNum(1)).toBe(1);
});
