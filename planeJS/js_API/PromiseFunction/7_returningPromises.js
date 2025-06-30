function savetoDbPromise(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve(`Data saved: ${data}`);  
    } else {
      reject(`Failed to save: ${data}`);
    }
  });
}

savetoDbPromise("aditya")
// promises reject and resolve hho jane ke baad kuch na kuch data send krt ehai it may be data or error message or ab sochne ki baat ye hai ki ye error msg kya hota hoga ya data ya hoga 
// resolve(`Data saved: ${data}`);   ye success data hai 
// reject(`Failed to save: ${data}`);  ye failure data hai 

// then ek arg leta hai jisme ye proomises se aaya hua data save hoat hai 

// work flow ye hoga ki pahle function ko call hoga normally 

  .then((res1) => {
    console.log(res1); // logs: Data saved: aditya
    return savetoDbPromise("thakur")
      .then((res2) => {
        console.log(res2); // logs: Data saved: thakur
        return savetoDbPromise("singh")
          .then((res3) => {
            console.log(res3); // logs: Data saved: singh
          })
          .catch((err3) => {
            console.log(err3); // logs: Failed to save: singh
          });
      })
      .catch((err2) => {
        console.log(err2); // logs: Failed to save: thakur
      });
  })
  .catch((err1) => {
    console.log(err1); // logs: Failed to save: aditya
  });



// same situation we face in api calling ki ek api call success ho jaye fir 2nd call jaaye and uske success hone ke baad 3rd call jaaye 