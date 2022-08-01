let array = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya : ", array);

let ascending = array.sort();
console.log("Ascending : ", ascending);

let descending = array.reverse();
console.log("Descending : ", descending);

let filter = array.filter((element) => {
  return element > 10;
});
console.log("Filter > 10 : ", filter);
