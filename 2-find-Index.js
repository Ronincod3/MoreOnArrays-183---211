const myBeautifulButton = document.querySelector(".myButton");

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.concat([3.99, 2]); // concat adds the new values, and on top of that it creates a new array instance of test.result
testResults.push(4);

console.log(testResults, storedResults);
console.log(testResults.indexOf(1.5));  // indexOf provides the index of a particular value in an array in this case the result is "position 2".
console.log(testResults.lastIndexOf(1.5)); //lastIndexOf does the same thing as indexOf but starting from the last value in an array going backwards.

// object example (find & findIndex)

const personData = [{ name: "Michael" }, { name: "Alexandre" }]; //array

myBeautifulButton.addEventListener("click", () => {  //pass a prompt value as a name to check against an array, "find" will bring the value entered of passed as an object
  let newname = prompt("Hey there Enter a new Name");
  const michael = personData.find((person, index, persons) => {
    return person.name === newname;
  });
  console.log(michael, personData);
});

const michaelIndex = personData.findIndex((person, index, persons) => {   // this finds the index of a specific value in an array
  return person.name === 'Alexandre';
});

console.log(michaelIndex);

// document.getElementsByClassName('myButton');
