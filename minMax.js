// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
//  arr = [1,3,5,7,9]
// The minimum sum is 1+3+5+7=16  and the maximum sum is 3+5+7+9=24. The function prints:

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints

// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Hints: Beware of integer overflow! Use 64-bit Integer.

function miniMaxSum(arr) {
  // arr = [3,7,1,8,9]
  let sortArr = arr.sort();
 
  // [1,3,7,8,9]
  let maxSum = 0;
  let minSum = 0;
  for (let i = 0; i < 4; i++) {
    minSum = sortArr[i] + minSum;
  }
  for(let i=arr.length-1; i > 0; i--) {
    maxSum = sortArr[i] + maxSum;
}
console.log(minSum,maxSum)
}
miniMaxSum([1, 3, 4, 5, 8]);
1   output 1
3   output 3+1

// function findMinMaxSum(arr) {
//   // Sort the array in ascending order
//   arr.sort((a, b) => a - b);

//   let minSum = 0;
//   let maxSum = 0;

//   // Calculate the minimum sum by adding the first four integers
//   for (let i = 0; i < 4; i++) {
//     minSum += arr[i];
//   }

//   // Calculate the maximum sum by adding the last four integers
//   for (let i = 1; i < arr.length; i++) {
//     maxSum += arr[i];
//   }

//   // Print the minimum and maximum sums
//   console.log(minSum + " " + maxSum);
// }

// // Example usage:
// const integers = [1, 2, 3, 4, 5];
// findMinMaxSum(integers);