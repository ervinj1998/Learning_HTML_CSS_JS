nums = [1,4,2,3];

const cumVl = ( sum => value => sum += value)(0);

console.log(nums.map(cumVl));