// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * antara 1 step atau 2 step
 * hitung cara naik yg berbeda (unique)
 *
 * input 1
 * output 1
 * 1
 *
 *
 * input 2
 * output 2
 * 1 + 1
 * 2
 *
 *
 * input 3
 * output 3
 * 1 + 1 + 1
 * 1 + 2
 * 2 + 1
 *
 *
 * input 4
 * output 5
 * 1 + 1 + 1 + 1
 * 1 + 1 + 2
 * 1 + 2 + 1
 * 2 + 1 + 1
 * 2 + 2
 *
 *
 * input 5
 * output 8
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 2 + 1 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 *
 * input 6
 * output 13
 * 1 + 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 1 + 2
 * 1 + 1 + 1 + 2 + 1
 * 1 + 1 + 2 + 1 + 1
 * 1 + 2 + 1 + 1 + 1
 * 2 + 1 + 1 + 1 + 1
 * 1 + 1 + 2 + 2
 * 2 + 1 + 2 + 1
 * 1 + 2 + 1 + 2
 * 2 + 1 + 1 + 2
 * 2 + 2 + 1 + 1
 * 1 + 2 + 2 + 1
 * 2 + 2 + 2
 */

const countStep = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return 1;

  memo[n] = countStep(n - 1, memo) + countStep(n - 2, memo);
  return memo[n];
};

console.log(countStep(100));
