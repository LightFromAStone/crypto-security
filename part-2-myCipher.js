function encode(message) {
   const modifier = Math.floor((message.length * message.length)/2);
   let newKey = '';

   for (let i = 0; i < message.length; i++) {
      newKey += String.fromCharCode(message[i].charCodeAt() + modifier);
   }
   return newKey;
}

function decode(message) {
   const modifier = Math.floor((message.length * message.length)/2);
   let newKey = '';

   for (let i = 0; i < message.length; i++) {
      newKey += String.fromCharCode(message[i].charCodeAt() - modifier);
   }
   return newKey;
}

let test = encode("I gave up and used an easy solution instead of the brilliant one I planned");
console.log(test);
console.log(decode(test));