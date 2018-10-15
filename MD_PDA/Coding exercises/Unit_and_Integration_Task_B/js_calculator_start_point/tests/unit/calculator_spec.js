var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')



describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

// 1. calculator.add()
  it('1. can add numbers together', function () {
    calculator.previousTotal = 1;
    calculator.add(4);
    result = calculator.runningTotal;
    assert.equal(result, 5);
  })

// 2. calculator.subtract()
  it('2. can subtract numbers', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    result = calculator.runningTotal;
    assert.equal(result, 3);
  })

  // 2. calculator.multiply()
  it('3. can multiply numbers', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    result = calculator.runningTotal;
    assert.equal(result, 15);
  })

// calculator.divide()
  it('4. can divide numbers', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    result = calculator.runningTotal;
    assert.equal(result, 3);
  })

// calculator.numberClick multiples()
  it('5. can display 4-digit numbers', function () {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    result = calculator.runningTotal;
    assert.equal(result, 1234);
  })

  // calculator.operatorClicks() multiple
  it('6. can use different operator combos', function () {
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(1);
    calculator.operatorClick('=')
    result = calculator.runningTotal;
    assert.equal(result, 1);
  })

  // calculator.clearClick() */
  it('7. can clear the running total', function () {
    calculator.previousTotal = 100012;
    calculator.clearClick();
    result = calculator.runningTotal;
    assert.equal(result, 0);
  })
});