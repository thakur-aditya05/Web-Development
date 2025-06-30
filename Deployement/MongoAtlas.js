// step 1 cloud DataBase servise

import { jsx } from "react/jsx-runtime";


// step 2 
// sign up in mongo atlas and compete basic needs 

// step 3 go to env file and save this link 
ATLASDB_URL=mongodb+srv://adityasingh:db.adityasingh.password@cluster0.l6lxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// step 4 in app.js
// const MONGO_URL="mongodb://127.0.0.1:27017/wander_lust"
const dbUrl=process.env.ATLASDB_URL;
// await mongoose.connect(MONGO_URL);
await mongoose.connect(dbUrl);//


// step 5 create user again 
// ab sb kuch khai dikhayi dega 
// to fir se login karo and user db dekho 
// 





// 