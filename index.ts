function sayHello(personName: string): string { // 傳入的參數並指定返回類型
    return 'Hello, ' + personName;
}

let personName: string = 'Heidi'; // 使用不同的變數名稱以避免衝突
console.log(sayHello(personName));