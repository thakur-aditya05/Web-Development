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

    let url=req.file.path;
    let filename=req.file.filename;
    // console.log(url,filename);


    // let {title,description,image, prices, country , location }=req.body.
    let listing = req.body.listing; // javascript object
    

    
    const newListing= new Listing(listing)
    console.log(newListing);
    
    newListing.owner=req.user._id; // id of the user 
    
    newListing.image={url,filename};
    await newListing.save();

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

    res.render("listing/edit.ejs", {listing} );
}



module.exports.updateListing = async (req,res)=>{
    
    let {id}=req.params;

    // applying autthorization so that not everyone can edit my listing 

    
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
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