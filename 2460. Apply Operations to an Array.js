/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
    if (nums[i] !== 0) nums[j++] = nums[i];
  }
  nums.fill(0, j);
  return nums;
};
console.log(applyOperations([1, 2, 2, 1, 1, 0]));
