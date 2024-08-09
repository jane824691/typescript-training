// 明確定義物件資料型態, 使用interface
// 很像在傳入物件前, 先寫好interface當規則, 先定義好要傳進string還num
interface Employees{
    name: string;
    role: string;
}
interface Company{
    CompanyName: string;
    description: string;
    employees: Employees[]; // 內包的資料格式, 寫在上面再引入, 而且是包成陣列
    size: Function; // F大寫專門指使用函式方法
}

// 基本的物件資料型態檢查
let c: Company = { //宣告變數c :Company代表與上方interface Company規則連動
    CompanyName: '有巢氏有限公司',
    description: '天天回家',
    employees:[
        {name: 'John', role: 'Manager'},
        {name: 'Mary', role: 'Boss'},
    ],
    size: function () {
        return this.employees.length;
    }
}
console.log(c.CompanyName, c.description);
console.log(c.size()*50000);

function list(c: Company) {
    c.employees.forEach ((employees)=>{
        console.log(employees.name, employees.role);
    })
}

list(c);