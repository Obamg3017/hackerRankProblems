// 1. FizzBuzz
// Given a number n, for each integer / in the range from 1 to n inclusive, print one value per line as follows:
// • If /is a multiple of both 3 and 5, print FizzBuzz.
// • If /is a multiple of 3 (but not 5), print Fizz.
// • If / is a multiple of 5 (but not 3), print Buzz.
// • If / is not a multiple of 3 or 5, print the value of i.
// Function Description
// Complete the function fizzBuzz in the editor below.
// fizzBuzz has the following parameters):
// int n: upper limit of values to test (inclusive)
// Returns: NONE
// Prints:
// The function must print the appropriate response for each value / in the set {1, 2, ... ny in ascending order, each on a separate line.

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0 && i % 5 != 0) {
      console.log("Fizz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}


function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let outputStr = "";
    if (i % 3 == 0) {
      outputStr += "Fizz"; //outStr= "Fizz"
    }
    if (i % 5 == 0) {
      outputStr += "Buzz"; 
    }
    if (outputStr === "") {
      outputStr = i.toString();
    }
    console.log(outputStr);
  }
}