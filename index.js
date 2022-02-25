import {
    NumeroALetras,
    setSingular,
    setPlural,
    getSingular
} from './numero_to_word/index.js';

//craate module with static class named numero_to_word with export default NumeroALetras



var numero_to_word = function (num = null) {
    var _value = null;
    //void principal
    let data = NumeroALetras(num).trim();
    _value = data;
    //chain voids
    return {

        FemaleValue: function () {
            if (_value == 'UN '+ getSingular())
                _value = 'UNA ' + getSingular();
            return this;
        },
        Capitalize: function () {

            _value = capitalizeFirstLetter(_value);;
            return this;
        },
        Config: {
            _setSingular: function (singular) {
                setSingular(singular);
            },
            _setPlural: function (plural) {
                setPlural(plural);
            },
        },
        toString: function () { //resulted 

            return Sanitizer(_value);
        }


    }
}


function Sanitizer(value) {
    return value.replace('  ', ' ');
}


function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default numero_to_word;