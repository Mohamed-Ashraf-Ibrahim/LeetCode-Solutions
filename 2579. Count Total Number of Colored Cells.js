/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  let ans = 1;

  if (n === 1) return 1;

  if (n > 1) {
    ans += 2 * n * (n - 1);
  }
  return ans;
};

console.log(coloredCells(2));
