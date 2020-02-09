var router = require('express').Router();

router.use('/items', require('./items'));

module.exports = router;