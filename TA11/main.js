function duplicates(nums){
  let newArr = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            newArr.push(nums[i]);
        }
    }
    return newArr;
}

console.log(duplicates([1,2,2,3,4,4,5,4]));