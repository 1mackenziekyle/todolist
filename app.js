/* App.js Template
 *  - Requires express and body parser
 *  - Creates an instance of express called 'app'
 *  - Listens on Port 3000
 *  - Gets the root directory and sends 'hello' on the response
 */
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser({extended: true}));
// app.set('view engine', 'ejs');

// // Set home page
// app.get("/", (req,res) => { 
//     res.render('index', {foo: 'FOO'} );
// } );


// // Listen on 3000

// app.listen(3000, () => { console.log("listening on 3000."); } );

let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();
    var day;
    switch (today.getDay()) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        default:
            console.log('Error: Current day is equal to ' + day);
            break;
    }
    res.render('list', {
        kindOfDay: day
    });
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));