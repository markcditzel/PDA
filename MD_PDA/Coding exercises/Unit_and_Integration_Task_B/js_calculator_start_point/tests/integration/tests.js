var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

// What does the code do in exceptional circumstances?  


describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });
  
  //Do the number buttons work to update the display of the running total? 
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

// ADD - Do each of the arithmetical operations work to update the display with the result of the operation?
  it('1. should have a working ADDITION button', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number7')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
  })

  // SUBTRACT Do each of the arithmetical operations work to update the display with the result of the operation?
  it('2. should have a working SUBTRACTION button - POSITIVE INT', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

   // SUBTRACT Do each of the arithmetical operations work to update the display with the result of the operation?
    // NEG NUMS - Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)?
   it('2. should have a working SUBTRACTION button - NEGATIVE INT', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1');
  })

 // MULTIPLY Do each of the arithmetical operations work to update the display with the result of the operation?
  it('3. should have a working MULTIPLICATION button', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
  })

   // MULTIPLY Do each of the arithmetical operations work to update the display with the result of the operation?
  // LARGE NUMS - Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)?
  it('4. should have a working MULTIPLICATION to display INFINITY', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
  })

  // MULTIPLY Do each of the arithmetical operations work to update the display with the result of the operation?
  // LARGE NUMS - Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)?
  it('5. should have a working MULTIPLICATION to display EXPONENT', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.3900845237714473e+122');
  })

  // INTEGER RESULT NUM DIVISON - Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)?

  it('6. should have a working DIVIDE button', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

 // DECIMAL RESULT NUM DIVISON - Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)?
  it('7. should have a working DIVIDE button to display DECIMAL', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5');
  })

  // Can we chain multiple operations together? 
  it('8. should CHAIN together MULTIPLE OPERATIONS together', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0');
  })

  // NEW TEST to work with new method - show ERROR for Div by zero attempts
  it('9. should display "ERROR NaN" when dividing by 0', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal("ERROR NaN");
  })

});