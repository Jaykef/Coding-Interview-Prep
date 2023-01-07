/**
 * Jaykef - Jaward Sesay
 * LeetCode 30. Substring with Concatenation of All Words
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// 1. Using a sliding window approach
var findSubstring = function(s, words) {
  if (words.length === 0) return [];
  let wordLen = words[0].length;
  let results = [];
  let windowStart = 0;
  let windowEnd = windowStart + words.length * wordLen;
  let window = s.substring(windowStart, windowEnd);
  while (windowEnd <= s.length) {
    let counts = getCounts(words);
    for (let i = windowStart; i < windowEnd; i += wordLen) {
      let currentWord = s.substring(i, i + wordLen);
      if (counts.hasOwnProperty(currentWord)) {
        counts[currentWord]--;
        if (counts[currentWord] === 0) {
          delete counts[currentWord];
        }
      } else {
        break;
      }
    }
    if (Object.keys(counts).length === 0) {
      results.push(windowStart);
    }
    windowStart++;
    windowEnd++;
    window = s.substring(windowStart, windowEnd);
  }
  return results;
}

function getCounts(words) {
  let counts = {};
  for (let word of words) {
    if (counts.hasOwnProperty(word)) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }
  return counts;

};

// 2. Using Brute Force
function findConcatenatedSubstrings(s, words) {
  if (words.length === 0) return [];
  let wordLen = words[0].length;
  let results = [];
  let perms = getPermutations(words);
  for (let i = 0; i < s.length - perms[0].length + 1; i++) {
    for (let perm of perms) {
      let concat = perm.join('');
      if (s.substring(i, i + concat.length) === concat) {
        results.push(i);
        break;
      }
    }
  }
  return results;
}

function getPermutations(array) {
  if (array.length === 1) return [array];
  let perms = [];
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let remaining = array.slice(0, i).concat(array.slice(i + 1));
    let subPerms = getPermutations(remaining);
    for (let perm of subPerms) {
      perms.push([current].concat(perm));
    }
  }
  return perms;
}
