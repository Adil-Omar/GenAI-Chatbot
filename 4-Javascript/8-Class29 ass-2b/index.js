// // 9. Write a JS code to print the Fibonacci series for a given value of N

// let e1 = 0
// let e2 = 1
// let n = 1000

// for (let index = 2; index < n; index++) {
//     let temp = e1
//     e1 = e2
//     e2 = e2 + temp

//     console.log(e2);
// }

// console.log("e2 after loop ", e2);

// // 12. Write a JS code for Binary search algorithm

// let nums = [1, 12, 23, 34, 599, 3567, 5678]
// let num = 3567

// let start = 0
// let end = nums.length - 1

// let ansLocation = -1

// while(start <= end){
//     let mid = Math.floor((start + end) / 2)

//     if (nums[mid] == num) {
//         ansLocation = mid
//         break
//     }

//     if(nums[mid] < num){
//         start = mid + 1;
//     } else {
//         end = mid - 1
//     }
// }


// console.log(ansLocation);


// // Finding minimum notes in a given amount

// let availableNotesAndCoins = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1]
// let possibleNotesAndCoins = []
// let amount = 1033
// let noOfNotes = 0

// for (let index = 0; index < availableNotesAndCoins.length; index++) {
//     let notes = Math.floor(amount / availableNotesAndCoins[index])
//     if (notes > 0) {
//         possibleNotesAndCoins.push(availableNotesAndCoins[index])
//         noOfNotes = noOfNotes + notes
//         amount = amount - (availableNotesAndCoins[index] * notes)
//     }
// }

// console.log("no of possible minimum notes & coins: ", noOfNotes);
// console.log("possible minimum notes & coins: ", possibleNotesAndCoins);


// console.log("before loop");

// for (let index = 0; index < 10000000000; index++) {
    
// }

// console.log("before loop");

// // . Write a JS code to find the no of digits in a number

// let num = 1013
// let count = 0

// while (num > 0) {
//     count++

//     num = Math.floor(num / 10)
// }

// console.log(count);


// // 7. Write a JS code to calculate the sum of digits in a number

// let num = 101300007854
// let sum = 0

// while (num > 0) {
    
//     sum = sum + num % 10
//     num = Math.floor(num / 10)

// }

// console.log(sum);


// 9. Write a JS code to print the Fibonacci series for a given value of N
let num1 = 0
let num2 = 1
let n = 6
for (let index = 2; index < n; index++) {
    let tmp = num1 // 0
    num1 = num2 // 1
    num2 = tmp + num2
}


console.log(num2);



















