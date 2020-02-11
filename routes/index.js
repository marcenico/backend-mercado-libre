var router = require('express').Router();

router.use('/api/items', require('./items'));

module.exports = router;