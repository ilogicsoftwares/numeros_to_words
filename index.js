import {NumeroALetras} from './numero_to_word/index.js';

//craate module with static class named numero_to_word with export default NumeroALetras



let numero_to_word={
    femValue:true,
    capitalize:false,
    toWords:function(num){
        let data = NumeroALetras(num).trim();
        

        if (this.femValue===true && data=='UN')
        data= 'UNA';

        if (this.capitalize===true)
        data= capitalizeFirstLetter(data);

        return data;
   }
  
    
}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default numero_to_word;









