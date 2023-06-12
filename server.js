const express = require("express");

const app = express();

app.use(express.json());

app.use(MyMiddleWare);

function MyMiddleWare (req, res, next){
    console.log("Inside the middleware I created");
    next(); // THis will pass the middleware to the next step


}
// Here I am going to Stitch the App 
require("./routes/idea.routes")(app);

// Server started

app.listen(8080, ()=>{
    console.log("Server started");
}
    
)