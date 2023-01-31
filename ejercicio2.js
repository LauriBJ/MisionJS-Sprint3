// Sprint 3.2 -> Create a function that generates an array and should return the index of this
function generateArray(long) {
  return Array.from(
    { length: long },
    (_, i) =>
      function () {
        return i;
      }
  );
}

let arr = generateArray(3);

console.log(arr[0]()); //return 0
console.log(arr[1]()); //return 1
console.log(arr[2]()); //return 2
