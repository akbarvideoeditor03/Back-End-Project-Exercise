const express = require ('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 8000;

// const things = require('./things.js');

app.use(morgan('common'))

app.get('/blog/:title/:id', (req, res, next) => {
    res.send(`id: ${req.params.id} and title: ${req.params.title} `)
    console.log('API diakses pada ', Date.now());
    next()
})

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

// app.use('/things', things)

app.listen(port, () => {
    console.log(`Running away on ${port}`);
});