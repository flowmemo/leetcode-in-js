/*
90. Subsets II
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
 nums.sort((a, b) => a - b)
 cosnt res = [[]]
 for(let i = 0; i < nums.length; ++i) {
   if (i == 0 || nums[i] != nums[i - 1]) {
     dfs(i, nums, path, res)
   }
 }
 return res
};

function dfs(pos, nums, path, res) {
  if (pos == nums.length) {
    res.push(path.slice());
    return;
  }
  path.push_back(nums[pos]);
  for (int i = pos + 1; i < nums.length; ++i) {
    if (i == pos + 1 || nums[i] != nums[i - 1]) {
      dfs(i, nums, path, res);
    }
  }
  dfs(nums.length, nums, path, res);
  path.pop();
}