/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let greater = [];
  let less = [];
  let equal = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      less.push(nums[i]);
    } else if (nums[i] > pivot) {
      greater.push(nums[i]);
    } else {
      equal.push(nums[i]);
    }
  }
  return res.concat(less, equal, greater);
};
console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
