const express =require("express");
const http = require("http");
const path = require("path");
const app =express();
const hbs =require("hbs");
app.set('view engine', 'hbs');
app.set('views','./templates/views')
const PORT = process.env.PORT || 3000 ;

//setting the path
const staticpath = path.join(__dirname,"../public");
//console.log(`${staticpath}`);
const partialpath = path.join(__dirname,"../templates/partials");
//midleware 
app.use("/mycss",express.static(path.join(__dirname,"../public/css")))
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
// app.use("/css",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
hbs.registerPartials(partialpath);
// app.use(express.static(staticpath));
app.get("/",(req,res) => {
    res.render("index");
});
app.get("/movie",(req,res) => {
    res.render("movie");
});


app.listen(PORT, () => {
    console.log(`microservice online at port no ${PORT}`);
});