var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let answer1 = [...set1].filter(num => !set2.has(num));
    let answer2 = [...set2].filter(num => !set1.has(num));
    return [answer1, answer2];
};

let result = findDifference([1, 2, 3], [2, 4, 6])

console.log(JSON.stringify(result));