/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let tempCount = 0;
  let minCount = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") {
      tempCount++;
    }
  }

  minCount = tempCount;

  for (let i = k; i < blocks.length; i++) {
    if (blocks[i - k] === "W") {
      tempCount--;
    }
    if (blocks[i] === "W") {
      tempCount++;
    }
    minCount = Math.min(minCount, tempCount);
  }
  return minCount;
};
