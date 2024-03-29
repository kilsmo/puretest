# Puretest

Puretest is a test framework for testing pure functions. A pure function is a function that has no internal state,
and will return the same value every time if the parameters sent to the function doesn't change.

The advantages that Puretest has compared to other test frameworks is that it forces you to write code without side
effects if you want to be able to test it, and that it's easy to write a large set of tests for a pure function.

Testing pure functions is not the same as unit tests, unit tests can set
the state for the unit, if you are testing a pure function there is no state to set.

Also, there is no such thing as assert functions, like it usually is
in a unit test framework.

## How to use

Since each pure function is supposed to have more than one test, puretest's test function takes an array of tests that
is run on a pure function: test(description, fn, tests)

    const tests = [
      { decription: 'Value -2', input: [-2], expected: 2 },
      { decription: 'Value 2', input: [2], expected: 2 },
      { decription: 'Value -3', input: [-3], expected: 3 },
      { decription: 'Value 0', input: [0], expected: 0 },
    ];

    test('Abs function', Math.abs, tests);

The test function returns information about the tests run, what was returned for each test, and if each test passed or failed.

There is currently no test runner, you have to build a test runner yourself. Don't worry, a test runner will be added to puretest.

## Why Puretest?

I started building Purescript since my coding style in Typescript/Javascript is to write pure functions when possible. I don't do normal unit tests anyway, I only test pure functions. Because of that, it is easier for me to use a dedicated test framework for pure function testing,
than to use a regular unit test framework.
