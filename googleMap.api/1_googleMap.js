// # step 1 visit api 
// https://console.mapbox.com/




// step 2 save the token api 
// .env
// MAP_TOKEN=pk.eyJ1IjoidGhha3VyYWRpdHlhMDUiLCJhIjoiY201c2s0b2E4MGlscjJpc2NwY3c0OTgxayJ9.5DFkrqYd1mlpp7GPZddwqw





// step 3 varities of map can be seen 
// https://docs.mapbox.com/mapbox-gl-js/example/setstyle/





// step 4 docs
// https://docs.mapbox.com/#maps---> in this we have ---> Mapbox GL JS (https://docs.mapbox.com/mapbox-gl-js/guides)





// step 5 just read 
// https://docs.mapbox.com/mapbox-gl-js/example/





// step 6 simple-map we use this 
// https://docs.mapbox.com/mapbox-gl-js/example/simple-map/




// step 7 boilerplate.ejs
{/* <link href="https://api.mapbox.com/mapbox-gl-js/v3.12.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.12.0/mapbox-gl.js"></script> */}








// step 8 show.ejs jaha map dikhana hai 
//   <!-- for map diagram -->
// <div class="col-8 offset-3 mb-3">
//    <h3>Where you'll be</h3>
//    <div id="map"></div>
// </div>









// step 9  add scripts 
// in show.ejs at the very end 
{/* <script>
    let mapToken = "<%= process.env.MAP_TOKEN %>"; // Your Mapbox token
    console.log(mapToken);
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [77.2090, 28.6139], // starting position [lng, lat]. 
        zoom: 5, 
});
</script> */}








// step 10 compalary styling (style.css)
/* #map { position: absolute; top: 0; bottom: 0; width: 100%; } styling for whole page but we want for small box */
#map { 
    height: 400px;
     width: 90vh; 
} 









// step 11 
// in show.ejs
<script>
    // shoow ejs se script chalane wale hai jisse environmmental variable ko save kara lenge 
    const mapToken="<%= process.env.MAP_TOKEN %>"; // js variable 
    // const listing = <%-JSON.stringify(listing) %>;  // js varible 
</script>

// in map.js file 
//  map alag file me likha hu hai and show .ejs alag file me issko access karega and basic map render ho jaeyga
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({     // new mapboxgl iss function ka use krke ek map creat kr rahe hai 
    container: 'map', // container ID
    // style: "mapbox://styles/mapbox/street-v12", // style url-->dark-v11  // yaha pr map ko ek style de rahe hai ki hamara map kaisa dukhayi dega 
    center: coordinates, // Ensure this is a valid [lng, lat] array   //---> map open hone ke baaad start kaha se hoga 
    zoom: 7 // starting zoom
});







// step 12 learn GEOCODING to show coordinate 
// send some loaction to API's ----> API's---> Coo rdinate 
//  "https://docs.mapbox.com/api/search/geocoding/" read this
// using givenn below api hame manually request nahi bhejnahi padengi mapBox-sdk-js 
// https://github.com/mapbox/mapbox-sdk-js
// go for geoCoding 
// https://github.com/mapbox/mapbox-sdk-js/blob/main/docs/services.md
// finnaly go at this end point 
// https://github.com/mapbox/mapbox-sdk-js/blob/main/docs/services.md#geocodingv6











// step 13 start implementing geocoding 
// npm install @mapbox/mapbox-sdk
// controllers-->listings.js
// geocoding ke liye 
//  mapbox ke under mapbox-sdk hai uske under kafi sari services hai or hame usme se geocoding wali services use krna hai  
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');// geooding wali servise ko acire kiya 
// lets require map token 
const mapToken=process.env.MAP_TOKEN;// map token acquired     
// base client ko create karenge map token ka use kr ke 
// geocodingClient ek aise object jo hame kaam kr ke dega geo coding se releted 
const geocodingClient = mbxGeocoding({ accessToken: mapToken });// service ko sart kr diya by passsing access token  geocodingClient--> ek aisi object jo hame kaam krke dega goe coding releted 
//  santyax yaad krne ki koi jarurat nahi hai hamesa documnetation se hi dekhn apdega 


















// step 14 createListing in listing.js of controllers
// paste this code like this 
geocodingClient.forwardGeocode({query: 'Paris, France',limit: 2}).send().then(response => {const match = response.body;});

 // also create schema to store corrdinates for the same in listingsSchema 

    // ek pahla trika coordinate ko save kare ka is that and ye bilkul sahi trika hai 
    // coordinates:{
    //     type:[Number],
    //     required:true,
    // }
    // but isse better tarika hai geo json
        geometry: {
          type: { //-->ek type store krna hai 
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required:true,
          },
          coordinates: { ///>> cordinates hoge array of numbers
            type: [Number],
            required:true,
          }
        }

// then like this we can create store and finalise coordinate 
module.exports.createListing=async (req, res, next) => {
 
    // step1 for geocoding 
    let response=await geocodingClient.forwardGeocode({query:req.body.listing.location, limit: 1, }).send();// geo coding ka basic code hai 
    //  ---->   console.log(response.body.features[0].geometry);//--->{ type: 'Point', coordinates: [ 74.054111, 15.325556 ] }
    // res.send("done");

    let url=req.file.path;
    let filename=req.file.filename;
    let listing = new Listing(req.body.listing);
    listing.owner=req.user._id; 
    listing.image={url,filename};

    // step 2 for geoCoding 
    // storing geo cordinates in geojson of mongodb inside listings itself 
    listing.geometry=response.body.features[0].geometry;


    let savedListing=await listing.save();
    console.log(savedListing);
    //pop-up msgs that 
    req.flash("success","new listings created");
    res.redirect("/listings");
}




// step 14 
// to show loaction ussing logitude and latitude 
// using marker 
// Create a default Marker and add it to the map.
// in map.js
const marker1 = new mapboxgl.Marker()
    .setLngLat([12.554729, 55.70651])
    .addTo(map);
    const coordinates = <%-JSON.stringify(listing.geometry.coordinates)%>;
    
    // lets set  marker 
    const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(coordinates) // listing.geometry.coordinates should be [longitude, latitude]
    .addTo(map);
    
    const map=new mapboxgl.Map({
      container:"map", // container id 
      style:"mapbox://styles/mapbox/streets-v12", // style url 
      center:corrdinates,
      zoom:9,
    })
    
    
    
    
    // step 15 finalla step to set popUp message 
    // Creating a marker
    const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(coordinates) // listing.geometry.coordinates should be [longitude, latitude]
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setMaxWidth("30rem")// creating a popup with offset
    .setHTML(`<h4>${locations}</h4><p>Exact location will be provided after booking</p>`)) // Make sure listing.location is defined
    
    .addTo(map);
// export loaction from Show.ejs
const locations = <%-JSON.stringify(listing.location)%>;





// step 16 done 