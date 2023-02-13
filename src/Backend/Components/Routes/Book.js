const publicationType=require('../Collections/PublicationType/PublicationType')
const bookPublication=require('../Collections/Book/BookPublication')
const app=require('express')
const router=app.Router();
const checkUser=require('../LoginMiddleware/checkUser')

// CREATE bookChapter
router.post('/addBook',checkUser,async(req,res)=>{
    const FID = req.user.id;

    //   find if user is adding publication or chapter
    const{Name, Year,Publisher,ISPN}=req.body;

     // extract book information
     const{Title,Editor,Edition,Area,CoAuthors}=req.body;

      // check if publication is already added in publication type or not 
    // flag to track if the publication type is new or old
    let pubFlag=true;
    let PID;

    if(await publicationType.findOne({ISPN:ISPN})){
        console.log("This publication already exists.")
        PID=await publicationType.findOne({ISPN:ISPN})
        pubFlag=false;
     }

     
    //   False means, publication type already exists and we have the PID
       if(!pubFlag){ 
        if(await bookPublication.findOne({PID:PID,FID:FID,Title:Title})){
            return res.json({"Message":"Duplicate entry.Title already exists."})
        }
    }

    if(pubFlag){ // if publication type is new then create new entry else ignore
        console.log("creating new publication type.")
        PID= await publicationType.create(
        {
           Type:"BOOK",
           Name:Name,
           Year:new Date(`${Year}`),
           Publisher:Publisher,
           ISPN:ISPN 
        }
    )}
    console.log("PID is ",PID)
    
    await bookPublication.create(
        {
            PID:PID,
            FID:FID,
            Title:Title,
            Editor:Editor,
            Edition:Edition,
            Area:Area,
            CoAuthors:CoAuthors

        }
    )
    return res.json({"Message":"Book added successfully."})

}
)

// READ bookBooks

router.get('/readBooks',checkUser,async(req,res)=>{
    const FID=req.user.id;
    // Match FID and type==Book and fetch PID
    const PID=await publicationType.find({FID:FID,Type:"CHAPTER"}).select('PID');
    const data=await bookPublication.find({FID:FID,PID:PID}).populate('PID');
    const result=data.map((item,i)=>{
        return {
        BookName:data[i].PID.Name,
        BookTitle:data[i].Title,
        Edition:data[i].Edition,
        Publisher:data[i].PID.Publisher,
        Editor:data[i].Editor,
        ISBN:data[i].PID.ISPN,
        Year:data[i].PID.Year.getFullYear(),
        CoAuthors:data[i].CoAuthors,
        Area:data[i].Area}

    })
    return res.json(result);
})

// UPDATE Book
router.put('/updateBook',checkUser,async(req,res)=>{
    const FID=req.user.id;
    console.log(FID)
    let {ISPN,Title,NewTitle,Edition,Editor,Area,CoAuthors}=req.body;
    // find the PID of requested chapter
    const PID=await publicationType.findOne({ISPN:ISPN}).select('_id');
    console.log(PID)
    console.log(await bookPublication.findOne({PID:PID,FID:FID,Title:Title}))
     try{
    await bookPublication.updateOne({PID:PID,FID:FID,Title:Title},{
        Title:NewTitle,
        Edition:Edition,
        Editor:Editor,
        Area:Area,
        CoAuthors:CoAuthors
    })
}catch(err){
    return res.json(err)
}
NewTitle?Title=NewTitle:Title;
const chapter=await bookPublication.findOne({PID:PID,FID:FID,Title:Title});
return res.json(chapter)
})


// DELETE book
router.delete('/deleteBook',checkUser,async(req,res)=>{
    const FID=req.user.id;
    const {ISPN,Title}=req.body;
    const PID=await publicationType.findOne({ISPN:ISPN}).select('_id');
   // if PID does not exist or has already been deleted.
    if(!PID){
        return res.json({"Message":"Publication not found."})
    }
   
    try{
        // if book does not exist or has already been deleted.
        if(!await bookPublication.findOne({FID:FID,PID:PID,Title:Title}))
        {
            return res.json({"Message":"Book not found."})
        }
    
        await bookPublication.deleteOne({FID:FID,PID:PID,Title:Title});
    }catch(err){
        console.log("Generated error is",err)
        return res.json(err)
    }
    return res.json({"Message":"Book deleted successfully."})
})
module.exports=router;