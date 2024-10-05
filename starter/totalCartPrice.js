// calculate total price of items in a cart using objects

// you have a shopping cart represented by an array of objects. each object contains the name of an item and its PromiseRejectionEvent. write a function htat calculates the total price of all items in the cart.

const cartItems = [
  {
    item: 'Laptop',
    price: 1000,
  },

  {
    item: 'Phone',
    price: 500,
  },
  {
    item: 'Tablet',
    price: 250,
  },
];

const totalPrice = cartItems.reduce(function (previousValue, currentValue) {
  return {
    price: previousValue.price + currentValue.price,
  };
});
console.log(totalPrice);
