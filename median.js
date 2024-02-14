// The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
// Example
// arr = [5,3, 1, 2, 4]
// The sorted array arr' = [1, 2, 3, 4, 5]. The middle element and
// the median is 3.
// Function Description
// Complete the findMedian function in the editor below. findMedian has the following parameters):
// • int arr[n]: an unsorted array of integers
// Returns
// • int: the median of the array
// Input Format
// The first line contains the integer n, the size of arr.
// The second line contains n space-separated integers arr (i]
// Constraints
// • 1 ≤ n ≤ 1000001
// • n is odd
// • -10000 ≤ arr|i ≤ 10000



function  findMedian(arr) {
   let sortArr =  arr.sort();
   // [1,2,3,5,6,8,9]
   let middleNumber=(arr.length + 1) / 2; 
  //5 
    console.log(sortArr(middleNumber-1))
}

//arr =[3,5,1,2,6,8,9]

//synchronous