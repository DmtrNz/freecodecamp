function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([1,2,3,4,5,6,7,8,9,10], 0));