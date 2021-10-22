const ids = new Set(['hi', 'myname', 'is', 'eddie']); //in a set a value is guaranteed to be unique
ids.add(2);

for(const entry of ids.entries()){
    console.log(entry);
    console.log(entry[0]);
}