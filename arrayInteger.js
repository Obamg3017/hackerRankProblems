// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

// Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where .

function lonelyinteger(a) {
    // a= [2,5,8,2,4,5,8]
    let sortArr = a.sort();
    // sortArr = [2,2,4,5,5,8,8]
    let uniqueElement= a[0];
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] != sortArr[i + 1] || sortArr[i] != sortArr[i - 1]) {
      uniqueElement = sortArr[i];
    }
  }
  return uniqueElement;
}

function lonelyinteger(a) {
  // a= [2,5,8,2,4,5,8]

  let uniqueElement = 0;
  for (let i = 0; i < sortArr.length; i++) {
    uniqueElement ^= a[i]; // uniqueElement = uniqueElement ^ a[i]
  }
  return uniqueElement;
}


function lonelyinteger(a) {
  

  let uniqueElement = a.reduce((a,b)=>a^b)
  return uniqueElement;
}



