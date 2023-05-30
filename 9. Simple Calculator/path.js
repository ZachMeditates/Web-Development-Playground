//shows the path of the current file location
console.log(__dirname);


/* 
Example of how to use this is in calculator.js:

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
}); 

*/