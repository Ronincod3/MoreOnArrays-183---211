const data = 'new york;10.99;2000';  //string with a common separator ';'
const transformedData = data.split(';'); //split the string by the separator ';' into an array
transformedData[1] = +transformedData[1]; //converting data in index [1] into a number with the '+' operator
console.log(transformedData);

const nameFragments = ['Max', 'Schwarz'];
const newName = nameFragments.join(' ');
console.log(newName);


const copiedNameFragments = [...nameFragments];
console.log(copiedNameFragments);