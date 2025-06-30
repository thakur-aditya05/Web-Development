const Listing=require("../models/listing");
const wrapAsync=require("../utils/wrapAsync.js");//




module.exports.index=async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};


module.exports.renderNewForm=(req, res) => {
        console.log(req.user); // user related saari info saved ho jati hai // user ke login hone ke baad reqest objject me user related  info saved hoti hai or yahi trigger krti hai is authenticated ko to verify user 
        res.render("listings/new.ejs");
}



module.exports.showListings=async (req, res) => {
    let { id } = req.params;
    // const listing = await Listing.findById(id);
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");// this line was added after review page is render at very last --->jo saare riews hai unko populate krna hai (yani saare ids ko deatil se refresent krwana hai  )
    // we get reviesw and owner name like this 

    if(!listing){
        //  creating flash messages step 3.2 for use flash 
        req.flash("error","  Listing  does not exists ");
        res.redirect("/listings")    
    }
    console.log(listing)
    res.render("listings/show.ejs", { listing });
}




module.exports.createListing=async (req,res)=>{


    // step1 for geocoding 
    let response=await geocodingClient.forwardGeocode({query:req.body.listing.location, limit: 1, }).send();// geo coding ka basic code hai 
    //  ---->   console.log(response.body.features[0].geometry);//--->{ type: 'Point', coordinates: [ 74.054111, 15.325556 ] }
    // res.send("done");

    let url=req.file.path;
    let filename=req.file.filename;
    // console.log(url,filename);

    // let {title,description,image, prices, country , location }=req.body.
    let listing = req.body.listing; // javascript object
    

    
    const newListing= new Listing(listing)
    console.log(newListing);
    
    newListing.owner=req.user._id; // id of the user 
    
    newListing.image={url,filename};

    // step 2 for geoCoding 
    // storing geo cordinates in geojson of mongodb inside listings itself 
    listing.geometry=response.body.features[0].geometry;

    let savedListing=await listing.save();
    console.log(savedListing);

    //  creating flash messages step 3 for use flash 
    req.flash("success","New Listing Created");

    res.redirect("/listings");
}














module.exports.renderEditForm=async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findByAndId(id);   

        // LISTING IF do not exists then we cant edit 
        if(!listing){
        //  creating flash messages step 3.2 for use flash 
        req.flash("error","  Listing  does not exists ");
        res.redirect("/listings")    
    }

        //this is the way to set prievew at edit form 
        let originalImageUrl=listing.image.url;
        originalImageUrl=originalImageUrl.replace("/upload","/upload/h_200,w_250");
        //  --->   console.log("Modified Image URL:", originalImageUrl);


        res.render("listings/edit.ejs", { listing ,originalImageUrl });
}



module.exports.updateListing = async (req,res)=>{
    
    let {id}=req.params;

    // applying autthorization so that not everyone can edit my listing 

    
    let listing=await Listing.findByIdAndUpdate(id, {...req.body.listing});

        // update preview image 
        // logic to save file to the backend --->this is the basic code edit ke time pe update kr payenge with new
        if(typeof req.file!=="undefined"){
            let url=req.file.path;
            let filename=req.file.filename;
            listing.image={url,filename};
            await listing.save();
        }



    //  creating flash messages step 3 for use flash 
    req.flash("success","New Listing Created");

    // res.redirect("/listings");
    res.redirect(`/listings/${id}`); 
}



module.exports.destroyListing = async (req,res)=>{
    let {id}=req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);

    //creating error flash messages step 3 for use flash 
    req.flash("success","New Listing deleted");

    res.redirect("/listings");

}