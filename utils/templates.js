/**
 * Use the data of filters fields in https://api.mercadolibre.com/sites/MLA/search?q=query&limit=4
 * for set an array of categories
 */
module.exports.setCategories = function (filters) {
  var categories = [];
  paths = filters[0].values[0].path_from_root;
  for (const path of paths) {
    categories.push(path.name);
  }
  return categories;
};

/**
 * Object template of a list of items
 */
module.exports.templateItems = {
  author: {
    name: 'Marcelo',
    lastname: 'Puebla'
  },
  categories: '=> setCategories(filters)',
  items: [
    '{{results}}',
    {
      id: '{{id}}',
      title: '{{title}}',
      price: {
        currency: '{{currency_id}}',
        amount: '{{available_quantity}}',
        decimals: '{{price}}'
      },
      picture: '{{thumbnail}}',
      condition: '{{condition}}',
      free_shipping: '{{shipping.free_shipping}}',
      address: '{{address.state_name}}'
    }
  ],
};

/**
 * Object template of an item
 */
module.exports.templateItem = {
  author: {
    name: 'Marcelo',
    lastname: 'Puebla'
  },
  item: {
    id: '{{id}}',
    title: '{{title}}',
    price: {
      currency: '{{currency_id}}',
      amount: '{{available_quantity}}',
      decimals: '{{price}}'
    },
    picture: '{{thumbnail}}',
    condition: '{{condition}}',
    free_shipping: '{{shipping.free_shipping}}',
    sold_quantity: '{{sold_quantity}}',
    description: '',
  }
};
