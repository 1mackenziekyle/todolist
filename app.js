/* App.js Template
 *  - Requires express and body parser
 *  - Creates an instance of express called 'app'
 *  - Listens on Port 3000
 *  - Gets the root directory and sends 'hello' on the response
 */

let express = require('express');
let bodyParser = require('body-parser');
let date = require(__dirname + "/date.js");
let app = express();
app.use(bodyParser({ extended: true } ) );
app.use(express.static("public"));
let items = ['Pick up mail', 'Buy milk and eggs', 'work out 30 mins'];
let workItems = [];

app.set('view engine', 'ejs');

/*  MAIN PAGE */
app.get('/', (req, res) => {
    let path = '/';

    /* Render list.ejs from views */
    res.render('list', {
        path: path,
        listTitle: date.getDate(),
        listItems: items
    } );
} );

app.post("/", (req, res) => { // each new input
    let item = req.body.newItem;
    items.push(item);
    res.redirect('back');
} );

// WORK PAGE
app.get('/work', (req,res) => {
    let path = '/work';
    res.render("list", {path: path, listItems: workItems, listTitle: "Work List"});
    app.post("/work", (req,res) => {
        let item = req.body.newItem;
        workItems.push(item);
        res.redirect('back');
    } );
} );

// ABOUT PAGE
app.get("/about", (req,res) => {
    res.render("about");
});

app.listen(process.env.PORT || 4000, () => console.log('App listening on port 4000.'));