const express = require ('express');
const morgan = require('morgan');
const app = express();
const things = require('./routes/things.js');
const books = require('./routes/books.js');
const port = process.env.PORT || 8000;

app.use(morgan('tiny'))

app.use('/books', books);
app.use('/things', things);

// app.get('/blog/:title/:id', (req, res, next) => {
//     res.send(`id: ${req.params.id} and title: ${req.params.title} `)
//     console.log('API diakses pada ', Date.now());
//     next()
// })

// app.get('/blog/:title/:id', (err, req, res, next) => {
//     res.send(`id: ${req.params.id} and title: ${req.params.title} `)
//     console.log('API diakses pada ', Date.now());
//     next()
// })


// app.get('/', (req, res) => {
//     res.send({
//         message : 'Hallo 👋',
//         status : 'Server Ready 🚀'
//     })
// })

// app.get('/hello', (req, res) => {
//     res.send("Hello World!")
// })

// app.post('/helloo', (req, res) => {
//     res.send("You just called the post method at '/hello'!\n")
// })

app.listen(port, () => {
    console.log(`Running away on ${port}`);
});