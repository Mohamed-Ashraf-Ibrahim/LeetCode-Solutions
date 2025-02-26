/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxHeight = 0;

  while (left <= right) {
    const width = right - left;
    let minHeight = Math.min(height[left], height[right]);

    let water = width * minHeight;

    maxHeight = Math.max(maxHeight, water);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxHeight;
};
