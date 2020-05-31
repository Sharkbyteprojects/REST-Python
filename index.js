const app=require("express")();
const pyrun=require("./pyrun");
app.use(pyrun());
const http=require("http");
const server=http.createServer(app);
server.listen(8080,()=>{
    console.log("Server listen for Requests");
});
