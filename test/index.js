import numero_to_word from '../index.js';
import numbers from '../index.js';

numbers().Config._setSingular('DOLAR');
numbers().Config._setPlural('DOLARES');

//returns CIENTO VEINTITRES
console.log(numbers(123.04).toString());


//returns Un mil ciento veinticuatro
console.log (numbers(1500450.04).Capitalize().toString());


//returns UNA
console.log(numbers(1.5).toString());







