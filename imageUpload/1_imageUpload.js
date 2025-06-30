// to manuplate the form form abhi url encoded data bhej raha hai 
// means 


// it parse only url  encoded data 
app.use(express.urlencoded({extends:true}));






// to parse file data within the express
// step 1
// new.ejs ---> form encrypt="multipart/form-data" --> // now form is capable of sendign data 
{/* <div class="mb-3">
    <label for="image" class="form-label">upload image</label>
    <input name="listing[image]" type="file" class="form-control" placeholder="upload the file " required  >
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Please choose a image.</div>
</div> */}


// step 2
// listing.js routes 
router.post("/",(req,res)=>{
    res.send(req.body);  // empty object beacuse parsing nahi ho pa raha hai 
})

// step3
// use multer to handle muliform data only process multi form data 
const express = require('express') 
const multer  = require('multer')  // multer file nikalega and uplaod or saved in uplaods folder
const upload = multer({ dest: 'uploads/' })  //uploads all fil will be saved in this folder 

// step 4
// listing.js routes 
router.post("/",upload.single('listing[image]'),(req,res)=>{   //'listing[image] 
    res.send(req.file);  // new parameter // store all file data   
})


// step 5
// lets use cloud servics to store our file 
// cloudnary 