const address = [
  "1234 juniper street",
  "philidelphia",
  "pennsylvania",
  "19147"
];

/*
    when youre deconstructing an array, since there arnt any names, it will go by order,
    the first value will go to the first const and etc

    if you only want say the first two and dont care about the others, then you can use th spread operator to 
    get the rest and store it in an array for later use if needed

    if you want to skip an item, just leave a comma in place of that item 
    const [,city, ...rest] and it will skip over street

    like with objects, you can define a default value the same way.
    i.e. 
*/

const [street, city, ...rest] = address;

console.log(`You are in ${street}, ${city}`);
console.log(rest);

////////////// EXERCISE /////////////

const item = ["coffee", "$2.00", "$2.50", "$2.75"];

const [edable, , medium, ,] = item;
console.log(`A medium ${edable} cost ${medium}`);
