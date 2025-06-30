


// inheritaing express class 
class ExpressError extends Error{
    constructor(status,message){
        super(); // caling express error 
        this.status=status;  // // what status is given 
        this.message=message;
    }
}


module.exports=ExpressError;