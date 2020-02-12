var router = require('express').Router();
var fetch = require("node-fetch");
var transform = require('json-to-json-transformer').transform;
var templates = require('../utils/templates');

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const urls = [
    `https://api.mercadolibre.com/items/${id}`,
    `https://api.mercadolibre.com/items/${id}/description`
  ];

  const allRequests = urls.map(url =>
    fetch(url).then(response => response.json())
  );

  Promise.all(allRequests)
    .then(data => {
      const newObj = transform(templates.templateItem, data[0]);
      newObj.item.description = data[1].plain_text;
      res.status(200).send(newObj);
    })
    .catch(function (err) {
      console.error('Hubo un problema con la petición Fetch:' + err.message);
      res.status(500).send(err);
    });
});

router.get('', (req, res, next) => {
  const query = req.query.q;
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
    .then(res => res.json())
    .then(function (data) {
      var newObj = transform(templates.templateItems, data, { setCategories: templates.setCategories });
      res.status(200).send(newObj);
    })
    .catch(function (err) {
      console.error('Hubo un problema con la petición Fetch:' + err.message);
      res.status(500).send(err);
    });
});

module.exports = router;
