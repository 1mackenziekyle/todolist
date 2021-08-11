/* 
 * Website: https://serene-meadow-63566.herokuapp.com/  
 * App.js Template
 *  - Requires express and body parser
 *  - Creates an instance of express called 'app'
 *  - Listens on Port 3000
 *  - Gets the root directory and sends 'hello' on the response
 */

// Dependencies
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Set up app
mongoose.connect('mongodb://localhost:27017/todolistDB', {useNewUrlParser: true});
let date = require(__dirname + "/date.js");
let app = express();
app.set('view engine', 'ejs');
app.use(bodyParser({
    extended: true
}));
app.use(express.static("public"));

// Mongoose Schema

const itemschema = {
    name: String,
    required: true
}
// Items
let items = ['Pick up mail', 'Buy milk and eggs', 'work out 30 mins'];
let workItems = [];



/*  MAIN PAGE */
app.get('/', (req, res) => {
    /* Render list.ejs from views */
    res.render('list', {
        listTitle: date.getDate(),
        listItems: items
    });
});

app.post("/", (req, res) => { // each new input
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect('back');
    } else {
        items.push(item);
        res.redirect('back');
    }
});

// WORK PAGE
app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
  });

// ABOUT PAGE
app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(process.env.PORT || 4000, () => console.log('App listening on port 4000.'));