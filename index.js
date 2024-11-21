const express = require ('express');
const app = express();
const port = process.env.PORT || 8000

const things = require('./things.js');

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

app.use('/things', things)

app.listen(port, () => {
    console.log(`Running away on ${port}`);
});