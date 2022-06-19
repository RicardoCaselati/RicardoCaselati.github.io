const fetchItem = async (idProduct) => {
  try {
    const promiseReponse = await fetch(`https://api.mercadolibre.com/items/${idProduct}`);
    const promiseOfResult = await promiseReponse.json();
    return promiseOfResult;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
