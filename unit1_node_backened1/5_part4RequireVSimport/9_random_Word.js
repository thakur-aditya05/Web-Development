// --------------------------------------
// lets have some fun with random words project of import 
// >> npm install random words
    // >> npm install random-words(https://www.npmjs.com/package/random-words)

import { generate, count } from "random-words";
console.log(generate());
//output: 'army'

console.log(generate(5));
//output: ['army', 'beautiful', 'became', 'if', 'actually']

console.log(generate({ minLength: 2 }));
//output: 'hello'

// >> backened1/5_part4RequireVSimport/node 9_random_Word.js 