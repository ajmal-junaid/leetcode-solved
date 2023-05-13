var findDisappearedNumbers = function (nums) {
    let newArr = new Set()
    for (let i = 0; i < nums.length; i++) {
        newArr.add(nums[i])
    }
    i=1
    console.log(newArr);
    while(i<=9){
        if(!newArr.has(i)){
            console.log(i);
        }
        i++;
    }
};
findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])