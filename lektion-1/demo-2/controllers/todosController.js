const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('todos från våran controller');
})
router.get('/:id', (req, res) => {
    res.send('en specifik todo med id: ' + req.params.id);
})

module.exports = router;