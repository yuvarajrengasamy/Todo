const app = require('./app');
const mongoose = require('mongoose');

port = 3000;

// database
dburl = "mongodb+srv://yuvaraj:yuvaraj@todo.rbkywmf.mongodb.net/TODO?retryWrites=true&w=majority"



mongoose.connect(dburl)
    .then((result) => {
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/', (req, res) => {
    res.send('feed');
})

app.listen(port, () => {
    console.log("Server Listening on http://localhost:" + port);
});
