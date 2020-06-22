const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', function(req,res){
    console.log(req.body)
    res.send("I am postinf something");
})
const port = 5500;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.