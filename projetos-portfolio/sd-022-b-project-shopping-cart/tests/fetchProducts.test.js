require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Executa a função fetchProducts e testa se fetch foi chamada', () => {
    fetchProducts('computador');
    expect(window.fetch).toHaveBeenCalled();
  });
  it('Testa se ao chamar a função fetchProducts, a função fetch é chamada corretamente com o endpoint utilizado', () => {
    fetchProducts('computador');
    expect(window.fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Teste se ao chamar a função fetchProducts com o argumento computador, deve retornar a mesma estrutura de dados computadorShearch', async () => {
    const resultExpected = await fetchProducts('computador');
    expect(resultExpected).toEqual(computadorSearch.results);
  });
  it('Testa se ao chamar a função fethProduct sem argumento, retorna um erro', async () => {
    const resultExpected = await fetchProducts();
    expect(resultExpected).toEqual(new Error('You must provide an url'));
  });
});
