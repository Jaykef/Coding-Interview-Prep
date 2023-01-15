/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    let n = s.length, m = p.length;
    let dp = Array(n + 1).fill().map(() => Array(m + 1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j <= m; j++) {
        if (p[j - 1] == '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (p[j - 1] == '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else {
                dp[i][j] = (s[i - 1] == p[j - 1]) && dp[i - 1][j - 1];
            }
        }
    }
    return dp[n][m];
}
