//
// Object destructuring
//

// const person = {
//     name: 'Anait',
//     age: 27,
//     location: {
//         city: 'Eilat',
//         temp: 37
//     }
// };

// //according the naming match
// const { name: firstName = "Anonymous", age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`)


// const {city, temp: temperature} = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego os the Enmy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// //match by position in the array
// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00', '&2.50', '$2.75'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);