//atbash cipher
atbash("ZYX");
function atbash(message) {
var alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz ";
var tebahpla = "ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa ";
var decoded_string = "";

for (i = 0; i < message.length; i++) {
    var coded_letter = message.charAt(i);
    var letter_index = alphabet.indexOf(coded_letter);
    var decoded_letter = tebahpla.charAt(letter_index);
    decoded_string = decoded_string + decoded_letter;
}
return decoded_string;
}

document.forms["atbash"].onsubmit = function(){
  var s = document.getElementById("atbash").value;
  var f = atbash(s);
  alert(f);
  return false;
}


//ROT13 function

function rot13Fast(str) { 
  return str.split('').map(x => rot13Fast.lookup[x] || x).join('')
}
rot13Fast.input  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
rot13Fast.output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('')
rot13Fast.lookup = rot13Fast.input.reduce((m,k,i) => Object.assign(m, {[k]: rot13Fast.output[i]}), {})
  
document.forms["rot13"].onsubmit = function(){
    var s = document.getElementById("rot13").value;
    var f = rot13Fast(s);
    alert(f);
    return false;
}
  //caesarcipher

  function isUpperCase(str) {
    return str === str.toUpperCase();
}

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

document.forms["caesarCipher"].onsubmit = function(){
  var s = document.getElementById("caesarCipher").value;
  var f = caesarCipher(s);
  alert(f);
  return false;
}