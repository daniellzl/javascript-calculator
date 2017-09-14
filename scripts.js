$(document).ready(function() {

  // initial state
  var input = '0';
  var operator = '';
  var previousOperator = '';
  var container = '';
  var numbers = true;
  var operations = false;
  var equals = false;
  $('#display').text(input);

  // if a number is clicked
  $('.numbers').click(function() {

    // if previous action was a number in input
    if (numbers === true) {

      numbers = false;

      // if length of input is less than 10
      if (input.length < 10) {
        if (input === '0') {
          input = '';
        }
        input += $(this).text();
        $('#display').text(input);

      // else if input is greater than 10
      } else {
        $('#display').text(input);
      }

      numbers = true;

    // else if previous action was an operator
    } else if (operations === true) {

      operations = false;
      input = '';
      input += $(this).text();
      $('#display').text(input);
      numbers = true;

    // else if previous action was equals
    } else if (equals === true) {

      equals = false;
      input = '';
      container = '';
      operator = '';
      input += $(this).text();
      $('#display').text(input);
      numbers = true;
    }
  })

  // if an operation is clicked
  $('.operations').click(function() {

    // if previous action was a number in input
    if (numbers === true) {
      numbers = false;

      // update container with input and most recent operator
      if (container === '') {
        container = parseInt(input);
      } else {
        if (operator === '+') {
          container += parseInt(input);
        } else if (operator === '-') {
          container -= parseInt(input);
        } else if (operator === '*') {
          container *= parseInt(input);
        } else {
          container /= parseInt(input);
        }
      }

      // save the current operator
      if (operator !== '') {
        previousOperator = operator;
      }

      operator = $(this).text();r
      $('#display').text(operator);
      operations = true;

    // else if previous action was an operator
    } else if (operations === true) {
      operations = false;
      operations = true;

    // else if previous action was equals
    } else if (equals === true) {
      equals = false;
      if (operator !== '') {
        previousOperator = operator;
      }
      operator = $(this).text();
      $('#display').text(operator);
      operations = true;
    }
  })

  // if equals is clicked
  $('#equals').click(function() {

    // if last action was a number in input
    if (numbers === true) {
      numbers = false;

      // take input and place into container with last operator
      if (operator === '+') {
        container += parseInt(input);
      } else if (operator === '-') {
        container -= parseInt(input);
      } else if (operator === '*') {
        container *= parseInt(input);
      } else {
        container /= parseInt(input);
      }

      // if container is less than 10 digits
      if (container.toString().length <= 10) {
        $('#display').text(container);

      // if container is larger than 10 digits
      } else {
        $('#display').text('Error');
      }

      // update current action
      equals = true;

    // if last action was an operator
    } else if (operations === true) {
      operations = false;
      operations = true;

    // if last actions was equals
    } else if (equals === true) {
      equals = false;
      equals = true;
    }
  })

  // if all clear clicked
  $('#allClear').click(function() {

    // reset all variables to initial state
    input = '0';
    operator = '';
    previousOperator = '';
    container = '';
    $('#display').text(input);
    numbers = true;
    operations = false;
    equals = false;
  })

  // if clear entry clicked
  $('#clearEntry').click(function() {

    // if last action was a number
    if (numbers === true) {
      numbers = false;
      input = '0';
      $('#display').text(input);
      numbers = true;

    // if last action was an operator
    } else if (operations === true) {
      operations = false;
      if (previousOperator === '') {
        container = '';
      } else {
        if (previousOperator === '+') {
          container -= parseInt(input);
        } else if (previousOperator === '-') {
          container += parseInt(input);
        } else if (previousOperator === '*') {
          container /= parseInt(input);
        } else {
          container *= parseInt(input);
        }
      }
      operator = previousOperator;
      $('#display').text(input);
      numbers = true;

    // if last action was equals
    } else if (equals === true) {
      equals = false;
      input = '0';
      operator = '';
      previousOperator = '';
      container = '';
      $('#display').text(input);
      numbers = true;
    }
  })

  // show calculator
  $(".container").fadeIn(1500);
});
