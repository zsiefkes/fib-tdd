/**
 * Returns the nth Fibonacci number. The nth Fibonacci number is defined as:
 *  0 for n = 0;
 *  1 for n = 1;
 *  the sum of the two preceding Fibonacci numbers for n > 1.
 * @param n A non-negative integer.
 * @return The nth Fibonacci number.
 * @throws Error: Argument must be non-negative.
 */
export const fibNum = (n: number): number => {
    if (n < 0) throw new Error("Argument must be non-negative");
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibNum(n - 1) + fibNum(n - 2);
};