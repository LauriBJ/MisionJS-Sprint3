//Sprint 3.1 -> check if str2 can be formed from str1 - return 'YES' or 'NO'

function twoStrings(input) {
  const array = input.split("\n"); //separando por fila
  array.forEach((array) => {
    let arr = array.trim().split(" "); //dividiendo cada lado de la cadena - TRIM para borrar espacios en los extremos
    str1 = arr[0];
    str2 = arr[1];
    //en caso que no esté vacío
    if (str2) {
      // Si la cadena 2 es menor es falso
      if (str2.length < str1.length) {
        return console.log("NO");
      }
      const str2Sorted = str2.split("").sort().join("");
      if (str1.localeCompare(str2Sorted) === 1) {
        return console.log("YES");
      }
      return console.log("NO");
    }
  });
}

const input = `
	hello eellloh
	aa ab
	aaa aba
	abcd daabbcc
	abcd aefgh
`;
twoStrings(input);
