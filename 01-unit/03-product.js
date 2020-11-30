// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function product(num1, num2) {
   if(num1===undefined && num2===undefined)
   {
     return 0;
   }
   let $number1=num1===undefined?1:num1;
   let $number2=num2===undefined?1:num2;
   return $number1*$number2	
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the product of two numbers.
  var result = product(2, 2);
  if (result !== 4) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.
  var result = product(5, 0);
  if (result !== 0) throw new Error('Expected product(5, 0) to be 0. Received: ' + result);


  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = product(8, 2, 4);
  if (result !== 16) throw new Error('Expected product(8, 2, 4) to be 16. Received: ' + result);


  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = product(8);
  if (result !== 8) throw new Error('Expected product(8) to be 8. Received: ' + result);


  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = product();
  if (result !== 0) throw new Error('Expected product() to be 0. Received: ' + result);


  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
