const getSavedCartItems = () => {
  const getItemLocalStorage = localStorage.getItem('cartItems');
  return getItemLocalStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
