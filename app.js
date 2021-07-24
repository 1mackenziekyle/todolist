/* App.js Template
 *  - Requires express and body parser
 *  - Creates an instance of express called 'app'
 *  - Listens on Port 3000
 *  - Gets the root directory and sends 'hello' on the response
 */

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser({ extended: true } ) );
app.use(express.static("public"));
let items = [];

app.set('view engine', 'ejs');

/* Set the home page to display the date*/
app.get('/', (req, res) => {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    let date = today.toLocaleDateString("en-US", options);

    /* Render list.ejs from views */
    res.render('list', {
        kindOfDay: date,
        listItems: items
    });
});

app.post("/", (req, res) => { // each new input
    let item = req.body.newItem;
    items.push(item);
    res.redirect('back');
});


app.listen(4000, () => console.log('App listening on port 4000.'));