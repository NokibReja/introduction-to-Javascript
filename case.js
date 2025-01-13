const item = 'Mango';
const fruit = 'MANGO';

if (item.toLocaleLowerCase() === fruit.toLocaleLowerCase()) {
    console.log('It is a fruit');
} else {
    console.log('wrong item')
}

const person = 'Hakim ';
const name = ' Hakim   ';

if (person.trim()=== name.trim()) {
    console.log('Name is matching')
} else {
    console.log("Name is not matching");
}