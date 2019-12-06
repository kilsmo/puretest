import { test } from '../src/puretest';

function isNegative(x: number) {
  return x < 0;
}

const tests = [
  {
    description: 'minus 7',
    input: [-7],
    expected: true
  },
  {
    description: 'plus 3',
    input: [3],
    expected: false
  },
  {
    description: '0',
    input: [0],
    expected: false
  }
];

const testsFailed = [
  {
    description: 'minus 7',
    input: [-7],
    expected: false
  },
  {
    description: 'plus 3',
    input: [3],
    expected: true
  },
  {
    description: '0',
    input: [0],
    expected: true
  }
];

function testsContentCorrect(testsOutput) {
  for (let i = 0; i < tests.length; i++) {
    if (tests[i].expected !== testsOutput[i].expected) return false;

    if (testsOutput[i].actual !== testsOutput[i].expected) return false;

    if (!testsOutput[i].pass) return false;
  }
  return true;
}

function testsContentFailed(testsOutput) {
  for (let i = 0; i < tests.length; i++) {
    if (tests[i].expected === testsOutput[i].expected) return false;

    if (testsOutput[i].actual === testsOutput[i].expected) return false;

    if (testsOutput[i].pass) return false;
  }
  return true;
}

function testCorrect() {
  const description = 'tests isNegative';
  const testsOutput = test(description, isNegative, tests);
  return (
    testsOutput.description === description &&
    testsOutput.tests.length === tests.length &&
    testsContentCorrect(testsOutput.tests)
  );
}

function testFailed() {
  const description = 'tests isNegative failing';
  const testsOutput = test(description, isNegative, testsFailed);
  return (
    testsOutput.description === description &&
    testsOutput.tests.length === tests.length &&
    testsContentFailed(testsOutput.tests)
  );
}

function testTest() {
  return testCorrect() && testFailed();
}

if (testTest()) {
  console.log('OK');
} else {
  console.log('failed');
}
