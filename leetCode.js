// median of 2 arrays
const findMedianSortedArrays = function (nums1 = [5, 7, 6], nums2 = [4, 1]) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    if (merged.length % 2 === 0) {
        let m = merged.length / 2;
        let med = (merged[m] + merged[m - 1]) / 2;
        return med;
    } else {
        return merged[(merged.length - 1) / 2]
    }
};
// console.log(findMedianSortedArrays());


/*
Leetcode 120
Given a triangle array, return the minimum path sum from top to bottom.
For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index 
i or index i + 1 on the next row.
Example 1:
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
*/
/**
* @param {number[][]} triangle
* @return {number}
*/
const minimumTotal = (triangle) => {
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            // 1st solution
            // let a = triangle[i - 1][j - 1] != undefined ? triangle[i - 1][j - 1] : Number.MAX_SAFE_INTEGER;
            // let b = triangle[i - 1][j] != undefined ? triangle[i - 1][j] : Number.MAX_SAFE_INTEGER;
            // triangle[i][j] += Math.min(a, b);

            //2nd solution
            let smallestAbove = Number.MAX_SAFE_INTEGER;
            if (j > 0) {
                smallestAbove = triangle[i - 1][j - 1];
            }
            if (j < i) {
                smallestAbove = Math.min(smallestAbove, triangle[i - 1][j]);
            }
            triangle[i][j] += smallestAbove;
        }
        console.log(triangle);
    }
    return Math.min(...triangle[triangle.length - 1]);
}

// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));
// console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]));

/*
Leetcode 931
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or
diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
Input: matrix = [[2,1,3],
                 [6,5,4],
                 [7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = (matrix) => {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let a = matrix[i - 1][j - 1] != undefined ? matrix[i - 1][j - 1] : Infinity
            let b = matrix[i - 1][j] != undefined ? matrix[i - 1][j] : Infinity
            let c = matrix[i - 1][j + 1] != undefined ? matrix[i - 1][j + 1] : Infinity

            matrix[i][j] = matrix[i][j] + Math.min(a, b, c)
        }
    }

    return Math.min(...matrix[matrix.length - 1])
};
// console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));

/*
Leetcode 1419. Minimum Number of Frogs Croaking
You are given the string croakOfFrogs, which represents a combination of the string "croak" from different frogs, that is, multiple frogs
 can croak at the same time, so multiple "croak" are mixed.
Return the minimum number of different frogs to finish all the croaks in the given string.
A valid "croak" means a frog is printing five letters 'c', 'r', 'o', 'a', and 'k' sequentially. The frogs have to print all five 
letters to finish a croak. If the given string is not a combination of a valid "croak" return -1.

Input: croakOfFrogs = "croakcroak"
Output: 1 
Explanation: One frog yelling "croak" twice.
*/
/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
const minNumberOfFrogs = (croakOfFrogs) => {
    let count = [0, 0, 0, 0, 0];
    let frogs = 0, max = 0;
    for (let c of croakOfFrogs) {
        let i = "croak".indexOf(c);
        if (i === -1) return -1;
        count[i]++;
        if (i === 0) {
            frogs++;
            max = Math.max(max, frogs);
        } else if (i === 4) {
            frogs--;
        } else if (count[i] > count[i - 1]) {
            return -1;
        }
    }
    return frogs === 0 && count.every(c => c === count[0]) ? max : -1;
}

console.log(minNumberOfFrogs("croakcroak"));
// console.log(minNumberOfFrogs("crcoakroak"));
// console.log(minNumberOfFrogs("croakcrook"));

/*
Leetcode 17. Letter Combinations of a Phone Number
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (digits === "") return [];
    let mapping = ["", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let combinations = [];
    let backtrack = function (index, path) {
        if (path.length === digits.length) {
            combinations.push(path.join(""));
            return;
        }
        let possibleLetters = mapping[Number.parseInt(digits[index]) - 1];
        for (let letter of possibleLetters) {
            path.push(letter);
            backtrack(index + 1, path);
            path.pop();
        }
    };
    backtrack(0, []);
    return combinations;
};
// console.log(letterCombinations("234"));

/*
3014. Minimum Number of Pushes to Type Word I
*/
/**
 * @param {string} word
 * @return {number}
 */
const minimumPushes = function (word) {
    let minPush = 8;
    if (word.length < 9) {
        return word.length;
    } else {
        let n = word.length;//17
        let j = 2;
        while (n > 8) {
            n = n - 8;
            if (n > 8) {
                minPush += 8 * j;
            } else {
                minPush += n * j;
            }
            j++;
        }
    }
    return minPush;
};

// console.log(minimumPushes("acolkxjbizfmhnrdq"));


/*
24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the 
list's nodes (i.e., only nodes themselves may be changed.)
Input: head = [1,2,3,4]
Output: [2,1,4,3]
*/
/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
    if (head == null || head.next == null) {
        return head;
    }
    let first = head;
    let second = head.next;
    first.next = swapPairs(second.next);
    second.next = first;
    return second;
};



/*
Analog Devices: Codility
Leetcode 2384
You are given a string num consisting of digits only.
Return the largest palindromic integer (in the form of a string) that can be formed using digits 
taken from num. It should not contain leading zeroes.
Input: num = "444947137"
Output: "7449447"
Explanation: 
Use the digits "4449477" from "444947137" to form the palindromic integer "7449447".
It can be shown that "7449447" is the largest palindromic integer that can be formed.
*/
const largestPalindromicInteger = (num) => {
    const hashMap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < num.length; i++) {
        hashMap[Number.parseInt(num[i])]++;
    }
    if (hashMap[0] === num.length) return "0";
    let result = "";
    let middle = "";
    for (let i = 9; i >= 0; i--) {
        if (!middle && hashMap[i] % 2 !== 0) {
            middle = i;
        }
        let freq = Math.floor(hashMap[i] / 2);
        while (freq-- > 0) {
            result += i;
        }
    }

    if (result.length > 0 && result[0] === '0') {
        return middle + "";
    }
    let reverse = result.split('').reverse().join('');
    if (middle) {
        result += middle;
    }
    result += reverse;
    return result;
}

// console.log(largestPalindromicInteger("444947137"));

/*
Leetcode 516
Given a string s, find the longest palindromic subsequence's length in s.
A subsequence is a sequence that can be derived from another sequence by deleting some or no elements 
without changing the order of the remaining elements.
Input: s = "bbbab" => 4 // One possible longest palindromic subsequence is "bbbb".
Input: s = "cbbd" => 2 // One possible longest palindromic subsequence is "bb".

Constraints:
1 <= s.length <= 1000
s consists only of lowercase English letters.
*/
const longestPalindromeSubseq = (s) => {
    if (s.length === 1) return 1;
    let res = 0;
    let left = 0;
    let right = s.length - 1;
    let temp = s[left];
    while (left < right) {
        if (s[left] === s[right]) {
            res += 2;
            temp = s[left]
            left++;
            right--;
        } else if (s[left] === temp) {
            s.splice(right, 1);
            right--;
        } else if (s[right] === temp) {
            s.splice(left, 1);
            left++;
        } else {
            left++;
            right--;
        }
    }
    if (res === 0) return 1;
    return s.length % 2 === 0 ? res : res + 1;
}
// console.log(longestPalindromeSubseq("cbbd"));

/*
5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const expand = (i, j) => {
        while (i >= 0 && j <= s.length && s[i] === s[j]) {
            i--;
            j++;
        }
        return s.slice(i + 1, j);
    }
    let res = "";
    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i);
        if (odd.length > res.length) res = odd;
        let even = expand(i, i + 1);
        if (even.length > res.length) res = even;
    }
    return res;
};

console.log(longestPalindrome("babbba"))
/*
300. Longest Increasing Subsequence
Given an integer array nums, return the length of the longest strictly increasing subsequence
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Input: nums = [0,1,0,3,2,3]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};

// Better approach
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS2 = function (nums) {
    let sub = [];
    sub.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > sub[sub.length - 1]) {
            sub.push(nums[i]);
        } else {
            let idx = sub.findIndex(n => n >= nums[i]);
            sub[idx] = nums[i];
        }
    }
    return sub.length;
};

/*
Leetcode 200
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number
of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let islandCount = 0;
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    /**
     * @param {character[][]} grid
     * @param {number} r
     * @param {number} c
     */
    const dfs = (grid, r, c) => {
        for (let dir of dirs) {
            let nr = r + dir[0];
            let nc = c + dir[1];
            if (0 <= nr && nr < m && 0 <= nc && nc < n && grid[nr][nc] === "1") {
                grid[nr][nc] = "0";
                dfs(grid, nr, nc);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                islandCount++;
                dfs(grid, i, j);
            }
        }
    }
    return islandCount;
};

let grid = [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]];
// console.log(numIslands(grid));

/**
 * 206. Reverse Linked List
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null || head.next === null) return head;
    let prev = null;
    let curr = head;
    while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

/*
1143. Longest Common Subsequence
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const memoize = (fn) => {
        let cache = new Array(text1.length + 1).fill(-1).map(() => new Array(text2.length + 1).fill(-1));
        return (i, j) => {
            if (cache[i][j] === -1) {
                cache[i][j] = fn(i, j);
            }
            return cache[i][j];
        }
    }
    const lcs = memoize((i, j) => {
        if (!text1.charAt(i) || !text2.charAt(j)) return 0;
        else if (text1.charAt(i) === text2.charAt(j)) {
            return 1 + lcs(i + 1, j + 1);
        } else {
            return Math.max(lcs(i, j + 1), lcs(i + 1, j));
        }
    })
    return lcs(0, 0);
};