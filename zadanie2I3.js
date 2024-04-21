//zad 2

// const json = '{"name":"Mango","age":3,"isHappy":true}';
// const obj = JSON.parse(json);
// console.log(obj);

// wynik z konsoli json poniżej
//name: "Mango"
//age : 3
//isHappy: true
// w związku z czym stwierdzam że właściwości obiektu odpowiadają ciągowi json


//zad 3

const invalidJSON = '{"name": "Mango", age: 3}';
try {
  const obj = JSON.parse(invalidJSON);
  console.log(obj);
} catch (error) {
  console.error('Error:', error.name, error.message);
}
