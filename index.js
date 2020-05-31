const app=require("express")();
const pyrun=require("./pyrun");
app.use(pyrun());
