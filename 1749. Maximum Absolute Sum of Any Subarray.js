/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let maxSum = nums[0],
    minSum = nums[0],
    currentMax = 0,
    currentMin = 0;
  // Using Kadane's Algorithm to find the maximum subarray sum
  for (let num of nums) {
    // find the maximum subarray sum (maxSum)
    currentMax += num;
    // If currentMax becomes negative, reset it to 0 to start a new subarray
    currentMax = currentMax < 0 ? 0 : currentMax;
    maxSum = Math.max(maxSum, currentMax);

    //  find the minimum subarray sum (minSum)
    currentMin += num;
    // If currentMin becomes positive, reset it to 0 to start tracking a new negative subarray
    currentMin = currentMin > 0 ? 0 : currentMin;
    minSum = Math.min(minSum, currentMin);
  }
  return Math.max(maxSum, Math.abs(minSum));
};
