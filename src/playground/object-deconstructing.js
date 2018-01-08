const person = {
  age: 26,
  location: {
    city: "melbourne",
    temp: 26
  }
};

/* these names have to match up one to one with the current names
 if you want the name to be something different from that that it was defined in the object,
 then you have to use the colum and give it a variable that youd like it to be called after
 when youre destructuring you can set up a default value in the header
 */
const { age: old, name: firstName = "anonymous" } = person;

console.log(old, firstName);

///////////////////// Example deconstructing ////////////////////
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);
