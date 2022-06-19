const fetchProducts = async (product) => {
  try {
    const promResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
    const promiseResults = await promResponse.json();
    return promiseResults;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
