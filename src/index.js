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
};

function decode(expr) {
    // write your solution here
    const arrExpr = []
    let curStr = '';
    
    for(let i = 0; i < expr.length; i++) {
      curStr += expr[i];
      if (curStr.length == 10) {
        arrExpr.push(curStr);
        arrExpr.push('**');
        curStr = '';
      }
    };
    
    const arrExprFlat = arrExpr.join('');
    const newArrExpr = []
    
    for(let i = 0; i < arrExprFlat.length; i++) {
      curStr += arrExprFlat[i];
      if (curStr.length == 2) {
        newArrExpr.push(curStr);
        curStr = '';
      }
    };
    
    for(let i = 0; i < newArrExpr.length; i++) {
      if(newArrExpr[i] == 10) {
        newArrExpr[i] = '.';
      } else if (newArrExpr[i] == 11) {
        newArrExpr[i] = '-';
      } else if (newArrExpr[i] == 00) {
        newArrExpr[i] = '';
      }
    };
    
    const arrMorse = [newArrExpr.join('')];
    const finalArrMorse = arrMorse.toString().split('**'); 
    const result = [];
    
    for(let i = 0; i < finalArrMorse.length; i++) {
      let currentKey = finalArrMorse[i];
      let currentValue = Object.keys(MORSE_TABLE).indexOf(finalArrMorse[i])
    
      if (Object.keys(MORSE_TABLE).includes(currentKey)) {
        result.push(Object.values(MORSE_TABLE)[currentValue]) 
      } else {
        result.push(' ') 
      }
    };
    
    const finalResult = result.join('');
    const realyFinal = finalResult.split(' ').filter(e=>e).join(' ')

    return realyFinal
}

module.exports = {
    decode
}