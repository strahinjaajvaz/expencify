// sorts it like a string 1, 10, 100 etc
// unicode table
// [a,b,c,d]

/*
    the order it does it in is as follows
    a b
    a c
    b c
    a b

*/
const scores = [1, 100, 21, 2];
console.log(
  scores.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
  })
);
