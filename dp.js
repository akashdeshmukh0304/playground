/**
 * Knap sack problem memoization
 * 
 */

const matrix = Array(1000).fill(Array(1000).fill(-1))
// console.log("matrix =", matrix)
const knapSackIm = (wt, val, W, n) => {

    if (n === 0 || W === 0) {
        return 0;
    }

    if (matrix[n][W] !== -1) {
        return matrix[n][W]
    }

    if (wt[n-1] <= W) {
        return matrix[n][W] = Math.max(val[n-1] + knapSackIm(wt, val, W - wt[n-1], n-1), knapSackIm(wt, val, W, n-1));
    }
    else if (wt[n-1] > W) {
        return matrix[n][W] = knapSackIm(wt, val, W, n-1);
    }
}

// console.log(knapSackIm([1,3,4,5], [1,4,5,7], 7, 4));
// console.log(knapSackIm([10,20,30], [60,100,120], 50, 3));

/**
 * Knap sack bottom up
 */
const knapSackBottomUp = (wt, val, W, n) => {

  const matrix = Array.from(Array(n+1), () => new Array(W+1))

  for (let i = 0; i < n+1; i++) {
    for (let j = 0; j < W+1; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < n+1; i++) {
    for (let j = 1; j < W+1; j++) {
      
      if (wt[i-1] <= j) {
        matrix[i][j] = Math.max(val[i-1] + matrix[i-1][j-wt[i-1]], matrix[i-1][j]);
      }
      else {
        matrix[i][j] = matrix[i-1][j];
      }
    }
  }
  // console.log("matrix =>", matrix)

  // console.log("matrix[i][j] =>", matrix[n][W])

}

// console.log(knapSackBottomUp([10,20,30], [60,100,120], 50, 3));
// console.log(knapSackBottomUp([1,3,4,5], [1,4,5,7], 7, 4));

/**
 * Function to find if the sum contains the subset of array
 * @param {*} arr 
 * @param {*} sum 
 */
const findSubsetOrNot = (arr, sum) => {

  const n = arr.length;
  const matrix = Array.from(Array(n+1), () => new Array(sum+1));

  for (let i = 0; i < n+1; i++) {
    for (let j = 0; j < sum+1; j++) {
      if (i === 0) {
        matrix[i][j] = false;
      }
      if (j === 0) {
        matrix[i][j] = true;
      }
    }
  }
  for (let i = 1; i < n+1; i++) {
    for (let j = 1; j < sum+1; j++) {
      if (arr[i-1] <= j) {
        matrix[i][j] = (matrix[i-1][j-arr[i-1]]) || matrix[i-1][j];
      }
      else {
        matrix[i][j] = matrix[i-1][j];
      }
    } 
  }
  return matrix[n][sum];
}

// console.log(findSubsetOrNot([2,3,7,8,10], 11));

/**
 * Find whether the array elements have equal sum partition
 */
const equalSumPartition = (arr, n) => {

  const sum = arr.reduce((current, next) => current + next);
  if (sum % 2 !== 0) {
    return false
  }

  return findSubsetOrNot(arr, sum/2)
}

// console.log(equalSumPartition([5,1,5, 11], 4))

const findSubsetCount = (arr, n, sum) => {

  const matrix = Array.from(Array(n+1), () => new Array(sum+1));
  
  for (let i = 0; i < n+1; i++) {
    for (let j = 0; j < sum+1; j++) {
      if (i === 0) {
        matrix[i][j] = 0;
      }
      if (j === 0) {
        matrix[i][j] = 1;
      }
    }
  }
  for (let i = 1; i < n+1; i++) {
    for (let j = 1; j < sum+1; j++) {
      
      if (arr[i-1] <= j) {
        matrix[i][j] = matrix[i-1][j-arr[i-1]] + matrix[i-1][j];
      }
      else {
        matrix[i][j] = matrix[i-1][j];
      }
    }
  }
  return matrix[n][sum];
}

console.log(findSubsetCount([2,3,5,6,8,10], 6, 10))