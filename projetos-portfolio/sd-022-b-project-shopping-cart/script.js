const cartItems = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const products = async (product) => {
  const sectionHTML = document.querySelector('.items');
  const arrayOfProducts = (await fetchProducts(product)).results;
  const loading = document.getElementsByClassName('loading')[0];
  loading.remove();
  arrayOfProducts.forEach((eachElement) => {
    const { id, title, thumbnail } = eachElement;
    const eachProduct = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    sectionHTML.appendChild(createProductItemElement(eachProduct));
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  (event.target).parentNode.removeChild(event.target);
  saveCartItems(cartItems.innerHTML);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('item__add')) {
    const fetchItemObject = await fetchItem(getSkuFromProductItem(event.target.parentElement));
    const li = createCartItemElement(fetchItemObject);
    const olObject = document.querySelector('.cart__items');
    olObject.appendChild(li);
    saveCartItems(cartItems.innerHTML);
  }
  if (event.target.classList.contains('cart__item')) {
    cartItemClickListener(event);
  }
  if (event.target.classList.contains('empty-cart')) {
    cartItems.innerHTML = '';
  }
}, false);

const rescueItemLocalStorage = () => {
  const rescuedItems = getSavedCartItems();
  cartItems.innerHTML = rescuedItems;
};

window.onload = () => {
  products('computador');
  rescueItemLocalStorage();
};
