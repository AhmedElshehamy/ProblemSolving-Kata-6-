// const arr = new Array(10)
// console.log(arr[0])

// *********************************

// const myObject = Object.freeze({ key: 'Value' })
// console.log(myObject)


// ********************************


// let num = 10000

// function x() {
//     if (num > 0) {
//         num--
//         x()
//     } else {
//         console.log(num)
//         x()
//     }

// }
// x()

// Optimize For This Code To Avoid Maximum call stack size exceeded

// I Can Using Two Way 
// 1=> SetTimeOut

// let number = 1000000000; // Set a high initial value

// function x() {
//     if (number > 0) {
//         number--;
//         setTimeout(x, 0);
//     } else {
//         console.log(number);
//     }
// }

// x();

// 2=> Using While Loop

let num = 100000000

function x() {
    while (num > 0) {
        num--
    }
    console.log(num)
}
x()