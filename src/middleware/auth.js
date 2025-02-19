


const adminauth= async(req,res,next)=>{
    const token = "xyz";
    const isauth= token === "xyz";
    if(isauth){
        next();
    }
    else{
        res.status(401).send("Not authorized");
    }
}

const userauth= async(req,res,next)=>{
    const token= "abc";
    const isauth=token === "abc";
    if(isauth){
        next();
    }
    else{
        res.status(401).send("Not authorized");
    }

}

module.exports={adminauth,userauth};  // exporting the middleware functions