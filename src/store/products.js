let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET-PRODUCTS':
      return payload;

    case 'IncreaseInStock':
      return state.map((product) => {
        if (product.name === payload.name) {
          return {
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            inStock: product.inStock + 1,
            img: product.img,
          };
        }

        return product;
      });

    case 'DecreaseInStock':
      return state.map((product) => {
        if (product.name === payload.name) {
          return {
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            inStock: product.inStock > 0 ? product.inStock - 1 : 0,
            img: product.img,
          };
        }

        return product;
      });

    default:
      return state;
  }
};

export const increaseInStock = (product) => {
  return {
    type: 'IncreaseInStock',
    payload: product,
  };
};

export const decreaseInStock = (product) => {
  return {
    type: 'DecreaseInStock',
    payload: product,
  };
};
