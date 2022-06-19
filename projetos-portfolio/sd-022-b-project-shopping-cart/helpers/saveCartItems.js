const saveCartItems = (item) => {
  localStorage.setItem('cartItems', item);
  // fonte: https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
