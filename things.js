const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Get routes on things")
});

router.post('/', (req, res) => {
    res.send("Post routes on things")
});

module.exports = router;