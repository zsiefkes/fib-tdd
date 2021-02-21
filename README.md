# Fibonacci TDD

An example of test-driven development in TypeScript. Implements a method that returns the nth Fibonacci number.

### Installation
Clone the repository to your local machine. From the terminal, run
```
$ yarn
```
to install dependencies.

### Build
To generate the JavaScript, run
```
$ yarn build
```

### Testing
To run the test suite,

```
$ yarn test
```
This will test only the source TypeScript.
To test both the TypeScript and output JavaScript, remove the following from `jest.config.js`:
```
  modulePathIgnorePatterns: [
    "<rootDir>/build/"
  ]
```