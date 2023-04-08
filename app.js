// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(num1, num2 = 0) {
  const arr = [Math.min(num1, num2), Math.max(num1, num2)];
  return Math.floor(Math.random() * (arr[1] - arr[0])) + arr[0];
}

console.log(randomNumber(50)) // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)) // 隨機印出 5 ~ 29 之間的任何一個數字