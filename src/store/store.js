let initialState = {
  categories: [],
  activeCategory: null,
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'update-activeCategory':
      return { ...state, activeCategory: payload };

    case 'GET-CATEGORIES':
      return { ...state, categories: payload };

    default:
      return state;
  }
};

export const updateActiveCategory = (category) => {
  return {
    type: 'update-activeCategory',
    payload: category,
  };
};
