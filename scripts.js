$(document).ready(function() {

    // fade in calculator
    $(".container").fadeIn(1500);
    // set initial state of calculator and display input
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
            // clear last action
            numbers = false;
            // if length of input is less than 10
            if (input.length < 10) {
                // if number is '0', empty input
                if (input === '0') {
                    input = '';
                }
                // append to input
                input += $(this).text();
                // display input
                $('#display').text(input);
                // else if input is greater than 10
            } else {
                // no longer accept numbers and just display input
                $('#display').text(input);
            }
            // update current action
            numbers = true;
            // else if previous action was an operator
        } else if (operations === true) {
            // clear last action
            operations = false;
            // clear input
            input = '';
            // append to input
            input += $(this).text();
            // display input
            $('#display').text(input);
            // update current action
            numbers = true;
            // else if previous action was equals
        } else if (equals === true) {
            // clear last action
            equals = false;
            // input, operator, and container get reset
            input = '';
            container = '';
            operator = '';
            // append to input
            input += $(this).text();
            // display input
            $('#display').text(input);
            // update current action
            numbers = true;
        }
    })

    // if an operation is clicked
    $('.operations').click(function() {
        // if previous action was a number in input
        if (numbers === true) {
            // clear last action
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
            // update operator
            operator = $(this).text();
            // display operator
            $('#display').text(operator);
            // update current action
            operations = true;
            // else if previous action was an operator
        } else if (operations === true) {
            // clear last action
            operations = false;
            // update current action
            operations = true;
            // else if previous action was equals
        } else if (equals === true) {
            // clear last action
            equals = false;
            // save the current operator
            if (operator !== '') {
                previousOperator = operator;
            }
            // update operator
            operator = $(this).text();
            // display operator
            $('#display').text(operator);
            // update current action
            operations = true;
        }
    })

    // if equals is clicked
    $('#equals').click(function() {
        // if last action was a number in input
        if (numbers === true) {
            // clear last action
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
                // display the container
                $('#display').text(container);
                // if container is larger than 10 digits
            } else {
                // display error
                $('#display').text('Error');
            }
            // update current action
            equals = true;
            // if last action was an operator
        } else if (operations === true) {
            // clear last action
            operations = false;
            // update current action
            operations = true;
            // if last actions was equals
        } else if (equals === true) {
            // clear last action
            equals = false;
            // update current action
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
        // display input
        $('#display').text(input);
        // reset status indicators
        numbers = true;
        operations = false;
        equals = false;
    })

    // if clear entry clicked
    $('#clearEntry').click(function() {
        // if last action was a number
        if (numbers === true) {
            // clear last action
            numbers = false;
            // change input to 0
            input = '0';
            // display input
            $('#display').text(input);
            // update current action
            numbers = true;
            // if last action was an operator
        } else if (operations === true) {
            // clear last action
            operations = false;
            // remove input from container with last operator
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
            // change operator to previous operator
            operator = previousOperator;
            // display input
            $('#display').text(input);
            // update current action
            numbers = true;
            // if last action was equals
        } else if (equals === true) {
            // clear last action
            equals = false;
            // reset all variables
            input = '0';
            operator = '';
            previousOperator = '';
            container = '';
            // display input
            $('#display').text(input);
            // update current action
            numbers = true;
        }
    })
});
