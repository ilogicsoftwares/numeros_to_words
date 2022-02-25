import numero_to_word from '../index.js';
import numbers from '../index.js';

numbers().Config._setSingular('vez');
numbers().Config._setPlural('veces');

//returns CIENTO VEINTITRES
console.log(numbers(123.04).toString());


//returns Un mil ciento veinticuatro
console.log (numbers(1500).Capitalize().toString());


//returns UNA
console.log(numbers(1).FemaleValue().toString());







