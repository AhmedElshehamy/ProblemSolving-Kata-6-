function solution(number) {
  // if (number <= 0) {
  //   return 0
  // }
  // let multiple_3_5 = Array.from({ length: number }, (_, i) => i).filter((e) => !(e % 3) || !(e % 5) || !(e % 15)).reduce((cur, acc) => cur + acc)
  // return multiple_3_5

  // Another Solution

  // let sum = 0

  // let arr = Array.from({ length: number }, (_, i) => i)
  // for (let i = 0; i < arr.length; i++) {
  //   if (!(arr[i] % 3) || !(arr[i] % 5) || !(arr[i] % 15)) {
  //     sum += arr[i]
  //   }
  // }
  // return sum

  // Another Solution

  let sum = 0

  for (let i = 0; i < number; i++) {
    if (!(i % 3) || !(i % 5)) {
      sum += i
    }
  }
  return sum
}
console.log(solution(10))
console.log(solution(15))
console.log(solution(30))
console.log(solution(-1))
console.log(solution(0))