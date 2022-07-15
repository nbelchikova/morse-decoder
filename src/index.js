const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********':  ' ',
};
let result='';
    let a='';
    let tire= "11";
    let point="10";
    let probel='**********';
    for (key in MORSE_TABLE) {
        for (let i=0; i<key.length; i++) {
            if (key[i]==='-') {
                a=a+tire;
            } else if (key[i]==='.') {
                a=a+point;
            }
           
              
        }
        
        if (MORSE_TABLE[key].length===10){
            MORSE_TABLE[a]=MORSE_TABLE[key]
        } else {
            let t=a.padStart(10, "0");
            MORSE_TABLE[t]=MORSE_TABLE[key];

        }
         
        a='';
        
         
        
    }
    console.log(MORSE_TABLE);
    
function decode(expr) {
    // wte your solution here
    result='';
    for (let j=0; j<expr.length; j=j+10) {
        
        let ten= expr.slice(j, j+10);
        
        for (key in MORSE_TABLE) {
            
            if (ten===key) {
                
                result=result +MORSE_TABLE[key];
            } 
            
        }
        
        
           
    } 
    return result;
     
    }
    
    


module.exports = {
    decode
}