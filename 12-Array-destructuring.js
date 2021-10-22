const nameData = ['Max', 'Schwarz', 'Mr', 30, 1994];
// const firstName = nameData[0];   instead of doing this
// const lastName = nameData[1];    or this

const [firstName , lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);

