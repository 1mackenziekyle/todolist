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


// Connect to the mongoose database
mongoose.connect('mongodb://localhost:27017/todolistDB', {
    useNewUrlParser: true
});

// Normal express.js App setup
let app = express();
app.set('view engine', 'ejs');
app.use(bodyParser({
    extended: true
}));
app.use(express.static("public"));

// Mongoose Schema
const itemSchema = { name: String }
const Item = mongoose.model('Item', itemSchema);

// Default items
const item1 = new Item({
    name: "Work out"
});
const item2 = new Item({
    name: "Buy food"
});
const item3 = new Item({
    name: "Cook Food"
});
const defaultItems = [item1, item2, item3];

// Add default items if todo list empty. Else, show length of list.
Item.find({}, (err, foundItems) => {
    /* .find function:
     * Params:
     * First parameter: the condition that each object found will satisfy. Called the 'filter', is a JS object.
     * Optional" Fields to return, then options
     * Final parameter: callback function which we pass the found items into, 
    */
    console.log("Length: ");
    console.log(foundItems.length);
    if (foundItems.length === 0) {
        Item.insertMany(defaultItems, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully added default items to database.");
                res.redirect('/');
            }
        });
    }
});




/*  MAIN PAGE */
app.get('/', (req, res) => {
    // Find all items
    Item.find((err, items) => { // Item is the collection, items is the result
        if (err) {
            console.log(err);
        } else {
            res.render("list", {
                listTitle: "Today",
                listItems: items,
            });
        }
    });
});

app.post("/", (req, res) => { // each new input
    let itemName = req.body.newItem;

    let item = new Item({
        name: itemName
    });

    item.save();

    res.redirect('/')
    
});


// Delete route
app.post("/delete", (req,res) => {
    Item.findByIdAndRemove(req.body.checkbox, (err) => {
        if (!err) {
            console.log("Successfully deleted item: ");
            console.log(req.body.checkbox);
        }
        else {
            console.log(err);
        }
    });

    res.redirect('/');
} );

// WORK PAGE
app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

// ABOUT PAGE
app.get("/about", (req, res) => {
    res.render("about");
});

// app.listen(process.env.PORT || 4000, () => console.log('App listening on port 4000.'));
app.listen(4000, () => console.log('App listening on port 4000.'));