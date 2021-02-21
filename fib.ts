export const fibNum = (n: number): number => {
    if (n < 0) throw new Error("Argument must be non-negative");
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibNum(n - 1) + fibNum(n - 2);
};