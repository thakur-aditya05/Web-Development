// javascript ek single threaded language hai yani ek time pe ek kaam , ya ek baar me ek line 
// but ye asynchrounously  bhi bhehave kr skti hai 
// jaise timer function laga diya ki browser ki help se sune 2 sec wait kkiya fir usne ussi call stack ko wapas kr diya 





// JavaScript is single-threaded, but it handles asynchronous operations (like saving to a database, fetching data from an API, etc.) using the event loop and callback queue.

// What Asynchronous Means in JavaScript
// In JavaScript, asynchronous code is code that doesn't block the main thread while it's waiting for something — like:
// Server/database responses
// File reading/writing
// Timers (setTimeout, setInterval)
// AJAX/fetch requests
// Instead of waiting, JS continues running the rest of the program and calls a function later (a callback) when the async task completes.



