var router = require('express').Router();
var fetch = require("node-fetch");

router.get('', (req, res, next) => {
  const query = req.query.q;
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
    .then(res => res.json())
    .then(function (data) {
      res.status(200).send(data);
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  fetch(`https://api.mercadolibre.com/items/${id}/description`)
    .then(res => res.json())
    .then(function (data) {
      res.status(200).send(data);
    });
});

module.exports = router;
