const person1 = {name:'Max'};
const person2 = {name:'Manuel'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: 'before yesterda', price: 100}]);

console.log(personData);
console.log(personData.get(person1));

console.log('--------------------');

for(const entry of personData.entries()) { //for loops to get every object and its array from the personData Maps
    console.log(entry);
};

console.log('. --------------------  entries --------------------' );

for(const [key, value] of personData.entries()){ //alternative for loops with selective keys
    console.log(key,value);
}

console.log('--------------------  . keys --------------------');

for(const keys of personData.keys()){ //for loops to retrieve only the keys
    console.log(keys);
}
console.log('--------------------  .value --------------------');

for(const value of personData.values()){ //for loops to retrieve only the keys
    console.log(value);
}
console.log('--------------------  .size --------------------');

console.log(personData.size);
