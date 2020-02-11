var router = require('express').Router();
var fetch = require("node-fetch");
var transform = require('json-to-json-transformer').transform;
var templates = require('../templateObjects/templates');

router.get('', (req, res, next) => {
  const query = req.query.q;
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
    .then(res => res.json())
    .then(function (data) {
      var newObj = transform(templates.templateItems, data);
      res.status(200).send(newObj);
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
