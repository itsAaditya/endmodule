let express = require('express');
let app = express();
let bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

let logger = function(req, resp, next){
    console.log(req.url);
    console.log(req.method);

    next();
}

let sayhello = (req, resp) => {
    resp.send("Welcome Aditya");
}

app.use(logger);
app.use('/', sayhello);

app.listen(8081, () => {
    console.log('Server is started on 8081')
})
