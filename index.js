const app=require("express")();
const pyrun=require("./pyrun");
app.use(pyrun());
const http=require("http");
http.createServer(app);
http.listen(8080,()=>{
    console.log("Server listen for Requests");
});
