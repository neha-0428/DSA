// Approach:

// 1. Take an array, divide it into two parts
// 2. Divide further till single element
// 3. Once single element found, try to merge them after sorting
// 4. Go further till all elements are sorted

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      sortedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

let arr = [13, 46, 24, 52, 20, 9]
let arr2 = [4, 73, 2, 73, 0, 51]
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [6, 8, 92, 45, 12, 15, 74, 74, 21, 3]

console.log(mergeSort(arr, 0, 5))
console.log(mergeSort(arr2))
console.log(mergeSort(arr3));
console.log(mergeSort(arr4))
