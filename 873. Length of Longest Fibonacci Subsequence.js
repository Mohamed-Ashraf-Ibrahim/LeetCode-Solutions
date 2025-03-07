/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  let set = new Set(arr);
  let res = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let prev = arr[i];
      let cur = arr[j];
      let next = prev + cur;
      let length = 2;

      while (set.has(next)) {
        prev = cur;
        cur = next;
        next = prev + cur;
        length++;
        res = Math.max(res, length);
      }
    }
  }
  return res;
};
