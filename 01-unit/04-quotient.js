// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(num1,num2) {
   try {
     if (num1===undefined && num2===undefined) {
       return 0;
     }
     else if(num2 === 0) {
       console.error("ERROR");
       return -1;
     }

     let $number1=num1===undefined?1:num1;
     let $number2=num2===undefined?1:num2;

     return $number1/$number2;

   } catch(ex) {
     console.error(ex.message);
     return -1;
   }
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  if (result !== 1) throw new Error('Expected quotient(2, 2) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  var result = quotient(3, 0);
  if (result !== -1) throw new Error('Expected quotient(3, 0) to be -1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = quotient(3, 3, 3);
  if (result !== 1) throw new Error('Expected quotient(3, 3, 3) to be 1. Received: ' + result);


  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = quotient(3);
  if (result !== 3) throw new Error('Expected quotient(3) to be 3. Received: ' + result);


  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = quotient();
  if (result !== 0) throw new Error('Expected quotient() to be 0. Received: ' + result);

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
