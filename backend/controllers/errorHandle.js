/*-------------------------------------------------------------------------//
|                                                                           |
|                                IMPORTANT                                  |
|---------------------------------------------------------------------------|
|                 NOTICE  : You cna handle error response here.. !   
|                                                                           |
|                                                                           |
|                                                                           |
---------------------------------------------------------------------------*/

module.exports =  (err,req,res,next)=>{
    const isProduction = false;
    if(!isProduction){
        res.status(err.status || 400).json({
            title: "Error ,  💁🏿 ",
            message: err.message 
        })
        return
    }
    return res.status(err.status || 400).json({
        title: "Error ,  💁🏿 ",
        message: "Somthing went wrong  , 🐹 !" 
    });
}