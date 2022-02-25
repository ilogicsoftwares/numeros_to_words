import {NumeroALetras} from './numero_to_word/index.js';

//craate module with static class named numero_to_word with export default NumeroALetras

var _value=null;


let numero_to_word={
      toWords:function(num){
        let data = NumeroALetras(num).trim();
        _value=data;
        return this; 

       
   },
   isFemValue:function(){
    if (_value=='UN')
    _value= 'UNA';
    
    
        return this; 
   },
    isCapitalize:function(){
       
        _value= capitalizeFirstLetter(_value);;
        return this; 
    },
    value:function(){
        return _value;
    }

  
    
}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default numero_to_word;









