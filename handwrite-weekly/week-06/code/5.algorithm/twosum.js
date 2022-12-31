function twoSum(nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (map.has(target - cur)) {
      return [map.get(target - cur), i]
    }
    map.set(cur, i)
  }
  return []
}

console.log(twoSum([3, 3], 6))
