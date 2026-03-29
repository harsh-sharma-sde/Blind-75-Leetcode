// 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expand(i, i);       // odd length
        expand(i, i + 1);   // even length
    }

    return s.substring(start, start + maxLength);
};