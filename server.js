//My server will live here

let express = require('express');

//create an instance of the connect server
let app = express();

//represents the port
const localport = 3000;

/** * Get port from environment and store in Express. */
let port = process.env.PORT || localport;
app.set('port', port);


//listen for requests on a specific port
app.listen(port);
console.log(`Server listening at http://localhost/${port}`);

//Routing - mount different routes

//Route for hello
app.use('/hello',(req,res,next) =>{
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World!");
    next();
});

//test 4
//Default route for website
app.use('/',(req,res,next) =>{
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome!");
    next();
});