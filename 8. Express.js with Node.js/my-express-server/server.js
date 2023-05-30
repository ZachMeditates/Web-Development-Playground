const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: zach.wallace@proton.me")
})

app.get("/hobbies", function(req, res) {
    res.send("Zach likes gardening, being a dad, and nature.")
})

app.get("/about", function(req, res) {
    res.send("Zach has a strong love for finding flaws, breaking software, and improving processes. He is a QA professional with over 10 years’ experience testing front-end and back-end for mobile, desktop, and web-based applications on multiple platforms, browsers, and devices. He has a love of Agile and Scrum methodologies and enjoys being involved at every stage of the SDLC to fully understand the applications that he is testing.")
})

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});