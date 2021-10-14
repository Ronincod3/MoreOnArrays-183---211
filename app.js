const number = [1,2,3];
console.log('number ' + number);

const myList = document.querySelectorAll('li');
const myArrayList = Array.from(myList); // it converst the nodelist in "myList" to an actual Array.
console.log(myList);
console.log(myArrayList);

const personalData = [30, 'Max', {moreDetails: []}]; //an array can contain a mixture of values ('numbers, strings, objects')
const analyticsData = [[1, 1.6], [-5.4, 2.1]];  //it loops through the Array array.

for(const data of analyticsData){
    for(const dataPoints of data) {
        console.log(dataPoints);
    }
}

const hobbies = ['Sports', 'Cooking', 'Coding', 'Sleeping', 'Jogging', 'Jumping', 'Weight-Lifting'];
hobbies.push('Reading'); // push = adds a new item to the array at the end.
hobbies.unshift('Running'); // unshift= it adds a new item to the array at the start.
const poppedValue = hobbies.pop(); //pop = removes the last item of the array
const shifting = hobbies.shift(); //shifts all items and removes the first item in the array
console.log(hobbies);

hobbies.splice(1, 0, 'good food'); //removes/adds in this case=  it tell the array that it wants to start from the index 1 item , and delete 0 items, but add a new "good food" from the first item
console.log(hobbies);


hobbies.splice(1, 2); //Start from index 0,"1", and delete 2 items from that index 1
console.log(hobbies);

hobbies.splice(-2, 2); //this will start with the 1st index item at the end of the array since the "minus symbol", and delete backwards 2 numbers
console.log(hobbies);


// ... splice returns the values deleted, therefore once an item or items are deleted you can still use such values when saved on a const
const myDeletedValues = hobbies.splice(1, 2);
console.log(myDeletedValues);