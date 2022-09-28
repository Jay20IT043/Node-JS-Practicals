const http = require("http");

const httpserver = http.createServer(function(req,res){

    if(req.url == '/')
    {
        res.end("Fisrt Time");
    }
    else if(req.url == '/r')
    {
        res.end("this is r");
    }
    else
    {
        res.end("  Hello world because there is no such route ");
    }
    
});

httpserver.listen(3000,()=>{
    console.log("Listning on port 3000...");
})