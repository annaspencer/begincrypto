//atbash cipher
const alphabet = `abcdefghijklmnopqrstuvwxyz`.split('')
const cipherer = [...alphabet].reverse()
const encoder = alphabet.reduce((o, c, i) => {
  o[c] = cipherer[i]
  return o
}, {})
const decoder = cipherer.reduce((o, c, i) => {
  o[c] = alphabet[i]
  return o
}, {})

const encode = str => {
  let arr = str
    .toLowerCase()
    .split('')
    .filter(c => cipherer.includes(c))
    .map(c => encoder[c])
  
  let i = -1
  let final = []

  arr.forEach(c => {
    i++
    final.push(c)
    if (i === 4) {
      final.push(' ')
      i = -1
    }
  })

  return final.join('')
}

const decode = str => {
  let arr = str
    .split('')
    .map(c => decoder[c])
  return arr.join('')
}

let msg = `The quick brown fox jumps over the lazy dog`
let encoded = encode(msg)
let decoded = decode(encoded)


//ROT13 function

function rot13(str) {
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
  }

  //caesarcipher

  function caesarCipher(str, key) {
    return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
  }
