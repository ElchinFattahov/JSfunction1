// filter method

function createIncrementer(initialValue) {
  let value = initialValue;

  return function () {
    value += 1;
    return value;
  };
}

const increment = createIncrementer(3);

const filteredResults = [
  increment(),
  increment(),
  increment(),
  increment(),
  increment(),
].filter((num) => num > 5);

console.log(filteredResults);

// find method

function createCounter(startFrom) {
  let currentValue = startFrom;

  return function () {
    currentValue += 1;
    return currentValue;
  };
}

const getNextCount = createCounter(3);

const firstValue = [
  getNextCount(),
  getNextCount(),
  getNextCount(),
  getNextCount(),
  getNextCount(),
].find((number) => number === 6);

console.log(firstValue);

// findindex method

function initializeCounter(startValue) {
  let counter = startValue;

  return function () {
    counter += 1;
    return counter;
  };
}

const generateNumber = initializeCounter(4);

const numberList = [
  generateNumber(),
  generateNumber(),
  generateNumber(),
  generateNumber(),
  generateNumber(),
];

const indexOfSeven = numberList.findIndex((item) => item === 7);
console.log("index", indexOfSeven);

//  every method

function startCounting(initialNumber) {
  let currentNumber = initialNumber;

  return function () {
    currentNumber += 1;
    return currentNumber;
  };
}

const getNext = startCounting(4);

const values = [getNext(), getNext(), getNext(), getNext(), getNext()];

const allEqualFive = values.every((value) => value >= 5);

console.log(allEqualFive);

// some method

function launchCounter(startNumber) {
  let current = startNumber;

  return function () {
    current += 1;
    return current;
  };
}

const fetchNext = launchCounter;

const sequence = [
  fetchNext(),
  fetchNext(),
  fetchNext(),
  fetchNext(),
  fetchNext(),
];

const hasAnyValueAboveFive = sequence.some((num) => num >= 5);

console.log(hasAnyValueAboveFive);

// reduce method

function beginCounter(baseValue) {
  let currentValue = baseValue;

  return function stepUp() {
    currentValue += 1;
    return currentValue;
  };
}

const getNextStep = beginCounter(1);

const resultList = [
  getNextStep(),
  getNextStep(),
  getNextStep(),
  getNextStep(),
  getNextStep(),
];

const totalSum = resultList.reduce(
  (accumulator, current) => accumulator + current,
  0
);

console.log(totalSum);

// include method

function createCounter(startFrom) {
  let counter = startFrom;

  return function () {
    counter += 1;
    return counter;
  };
}

const getNextValue = createCounter(1);

const valuess = [
  getNextValue(),
  getNextValue(),
  getNextValue(),
  getNextValue(),
  getNextValue(),
];

const hasNumberSeven = valuess.includes(4);
console.log(hasNumberSeven);

// map method

function initCounter(start) {
  let value = start;

  return function () {
    value += 1;
    return value;
  };
}

const generateValue = initCounter(1);

const exists = [
  generateValue(),
  generateValue(),
  generateValue(),
  generateValue(),
  generateValue(),
];

const doubled = exists.map((num) => num * 2);

console.log(doubled);

// sort method

function initCounter(start) {
  let value = start;

  return function () {
    value += 1;
    return value;
  };
}

const stepForward = initCounter(1);

const valueList = [
  stepForward(),
  stepForward(),
  stepForward(),
  stepForward(),
  stepForward(),
];

const ordered = valueList.sort((x, y) => x - y);

console.log(ordered);
