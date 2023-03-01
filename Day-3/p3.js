let nums = [0,2,4,2,6,7,8,10,11];


for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {// every time when it will be true it will start again, without passing to the next step
        continue;
    }
    console.log(nums[i]);
}