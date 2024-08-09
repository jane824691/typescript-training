// function 函式名稱(參數名 : 資料型態){...}
function show(msg:string) {
    console.log(msg);
}

show(5); // num, error
show(true); // boolean, error
show("Hello", "World"); // 原function只定義1個參數, 這邊卻傳了2個參數對不上故error
show("Hello"); // ok


// compile time error, 沒有寫回傳值return
function add(n1:number, n2:number) {
    console.log(n1+n2);
}

// ok
function addNum(n1:number, n2:number) {
    return n1 + n2
}

// 使用「void」代表沒有回傳值, 適用函式就真的沒有要回傳值, 
// 比如純log輸出訊息到控制台 或 回呼函數（Callbacks）
// ok
function addVoid(n1:number, n2:number):void {
    console.log(n1+n2);
}

// 一般會用變數如自定義ans去接收函式addVoid呼叫出來的回傳值，接起來，可能之後繼續用
let ans: number = add(3,4); // error, 但上例沒有return值, 不完整故無法繼續使用在被宣告的變數ans裡
addVoid(3,4); // ok

// 練習：定義一個函式，接受數字陣列，計算數字加總並回傳
function calculate(nums:number[]):number {
    let total:number = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

// 這樣是傳了四個參數進去function, 上面function才一個參數, 而且是「數字陣列」
// let result = calculate(3,4,5,6); 
let result = calculate([3, 4, 5, 6]);
console.log(result);
