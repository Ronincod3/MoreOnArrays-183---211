const myBeautifulButton = document.querySelector('.myButton');

myBeautifulButton.addEventListener('click', () => {
    const personData = [{name: 'Michael'}, {name: 'Alexandre'}];
    let newname = prompt('Hey there Enter a new Name');
    const michael = personData.find((person,index,persons) =>{
        return person.name === newname;
    })  
    console.log(michael, personData);  

    let changeName = prompt('Would you like to change the name "Y" or "N"');
    const changeTheName = ()=>{
        if(changeName === 'y') {
            let newName = prompt('enter the new name');
            michael.name = newName;
        }
        else{
            return;
        }
    }
    changeTheName();
    console.log(michael);
});


// myNewButton.addEventListener('click', () => {
//     const personData = [{ name: "Max" }, { name: "Carlitos" }];
//     prompt('Hey enter the word "Max"');
//     const max = personData.find((person, index, persons) => {
//       return person.name === "Max";
//     });
//     console.log(max, personData);
//   });
  