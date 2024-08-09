// 練習：定義一個函式，接受數字陣列，計算數字加總並回傳
function calculate(nums) {
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}
// 這樣是傳了四個參數進去function, 上面function才一個參數, 而且是「數字陣列」
// let result = calculate(3,4,5,6); 
var result = calculate([3, 4, 5, 6]);
console.log(result);
