// HI, if you're here it's probably because I submitted my github for review. This is a personal project I made for fun! As result, school and work 
// projects take priority. But I like to come back and update every so often. I would like to add jquery and clear inputs...one day...:)



//atbash cipher
atbash("ZYX");
function atbash(message) {
const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz ";
const tebahpla = "ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa ";
let decoded_string = "";

for (i = 0; i < message.length; i++) {
    let coded_letter = message.charAt(i);
    let letter_index = alphabet.indexOf(coded_letter);
    let decoded_letter = tebahpla.charAt(letter_index);
    decoded_string = decoded_string + decoded_letter;
}
return decoded_string;
}
// change this to JQuery!
document.forms["atbash"].onsubmit = function(){
  const s = document.getElementById("atbash").value;
  let f = atbash(s);
  swal(f);
  
  return false;
}


//ROT13 function

function rot13Fast(str) { 
  return str.split('').map(x => rot13Fast.lookup[x] || x).join('')
}
rot13Fast.input  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
rot13Fast.output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('')
rot13Fast.lookup = rot13Fast.input.reduce((m,k,i) => Object.assign(m, {[k]: rot13Fast.output[i]}), {})

 //change this to jquery! 
document.forms["rot13"].onsubmit = function(){
    const s = document.getElementById("rot13").value;
    let f = rot13Fast(s);
    swal(f);
    return false;
}
  //caesarcipher
//change to uniform characters
  function isUpperCase(str) {
    return str === str.toUpperCase();
}
//caesar cipher logic with default key of 3
function caesarCipher(str, key = 3){
  let decipher = '';
  for(let i = 0; i < str.length; i++){
    if(isUpperCase(str[i])){
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    }else{
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    }
  }
  return decipher;
}

//change this to jquery!
document.forms["caesarCipher"].onsubmit = function(){
  const s = document.getElementById("caesarCipher").value;
  let f = caesarCipher(s);
  swal(f);
  return false;
}

function caesarCipherdecode(str, key = (-3)){
  let decode = '';
  for(let i = 0; i < str.length; i++){
    if(isUpperCase(str[i])){
      decode += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    }else{
      decode += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    }
  }
  return decode;
}
//change to jquery!
document.forms["decodecaesar"].onsubmit = function(){
  const s = document.getElementById("decodecaesar").value;
  let f = caesarCipherdecode(s);
  
  swal(f);
  return false;
}
