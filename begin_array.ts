// 可在terminal> node 「檔名.ts」, 看log測試結果
// 數字陣列
// number[]、Array<number>

// 字串陣列
// string[]、Array<string>

// 布林值陣列
// boolean[]、Array<boolean>

// 任何資料型態陣列, 少用, 因無法判斷型別會變跟寫js差不多
// any[]、Array<any>

let x:number = 3;
x = true; // error
let y:string[] = [ 3, "a", "b" ] // error, defined as string, should not appear Num


let a:string='3';
let z:string[]= [ a, "a","b"]
console.log(z) // ["3", "a", "b"] 