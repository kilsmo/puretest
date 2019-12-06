import { deepEqual } from '../src/deepequal';

function fn1() {}

function fn2() {}

const failingTests = [
  [undefined, false],
  [undefined, true],
  [undefined, null],
  [undefined, []],
  [undefined, {}],
  [undefined, [1]],
  [undefined, { a: 1 }],
  [undefined, fn1],
  [false, true],
  [false, null],
  [false, []],
  [false, {}],
  [false, [1]],
  [false, { a: 1 }],
  [false, fn1],
  [true, null],
  [true, []],
  [true, {}],
  [true, [1]],
  [true, { a: 1 }],
  [true, fn1],
  [null, []],
  [null, {}],
  [null, [1]],
  [null, { a: 1 }],
  [null, fn1],
  [[], {}],
  [[], [1]],
  [[], { a: 1 }],
  [[], fn1],
  [{}, [1]],
  [{}, { a: 1 }],
  [{}, fn1],
  [fn1, fn2],
  [null, 0],
  [null, 'null'],
  [0, '0'],
  [undefined, 'undefined'],
  [1, '1'],
  [
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2 }
  ],
  [
    { a: 1, b: [2, 3] },
    { a: 1, b: [2, 4] }
  ],
  [
    [1, { a: 2, b: 3 }],
    [1, { a: 2, b: 4 }]
  ]
];

const passingTests = [
  [undefined, undefined],
  [false, false],
  [true, true],
  [null, null],
  [[], []],
  [{}, {}],
  [fn1, fn1],
  [[1], [1]],
  [
    [1, 2],
    [1, 2]
  ],
  [
    [1, [2, 3]],
    [1, [2, 3]]
  ],
  [
    [1, [2, [3, 4]]],
    [1, [2, [3, 4]]]
  ],
  [3, 3],
  ['hello', 'hello'],
  [
    { a: 1, b: 2 },
    { b: 2, a: 1 }
  ],
  [
    { a: 1, b: [2, 3] },
    { a: 1, b: [2, 3] }
  ],
  [
    [1, { a: 2, b: 3 }],
    [1, { a: 2, b: 3 }]
  ]
];

function equal(testData) {
  return deepEqual(testData[0], testData[1]);
}

function testDeepEqual() {
  for (let i = 0; i < failingTests.length; i++) {
    if (equal(failingTests[i])) {
      return false;
    }
    if (equal([failingTests[i][1], failingTests[i][0]])) {
      return false;
    }
  }
  for (let i = 0; i < passingTests.length; i++) {
    if (!equal(passingTests[i])) {
      return false;
    }
    if (!equal([passingTests[i][1], passingTests[i][0]])) {
      return false;
    }
  }
  return true;
}

if (testDeepEqual()) {
  console.log('OK');
} else {
  console.log('failed');
}
