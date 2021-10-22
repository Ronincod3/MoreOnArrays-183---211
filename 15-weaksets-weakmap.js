let person1 = {name:'Max'};
const persons = new WeakSet(); //weakset allows the release of certain values for garbage collection.
persons.add(person1);

// persons.delete(person1) //deleting object from weakset

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info');

console.log(personData);