module.exports.templateItems = {
  author: {
    name: 'Marcelo',
    lastname: 'Puebla'
  },
  // categories: '{{results.category_id}}',
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
      free_shipping: '{{shipping.free_shipping}}'
    }
  ],
};

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