/**
 * Jaykef - jaward Sesay
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  let result = "1";
  for (let i = 1; i < n; i++) {
    let say = "";
    while (result.length > 0) {
      let count = 1;
      let current = result[0];
      result = result.slice(1);
      while (result.length > 0 && result[0] === current) {
        count++;
        result = result.slice(1);
      }
      say += `${count}${current}`;
    }
    result = say;
  }
  return result;
}
