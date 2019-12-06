import { deepEqual } from './deepequal';

export interface Test {
  description: string;
  input: any[];
  expected: any;
}

export interface TestOutput {
  description: string;
  actual: any;
  expected: any;
  pass: boolean;
}

export interface TestsOutput {
  description: string;
  tests: TestOutput[];
}

/**
 * Run tests against a function. Tests pure functions.
 * Returns output for each test, including the actual value,
 * the expected value and if the test passed.
 *
 * test is a pure function.
 *
 * @param description Describes the test
 * @param fn The function that is called for each test
 * @param tests All the tests, with the return value expected, an array of parameter values, and a description for each test
 */
export function test(
  description: string,
  fn: (...args: any) => any,
  tests: Test[]
): TestsOutput {
  const res = tests.map(t => {
    const actual = fn(...t.input);
    return {
      description: t.description,
      actual,
      expected: t.expected,
      pass: deepEqual(actual, t.expected)
    };
  });

  return {
    description,
    tests: res
  };
}
