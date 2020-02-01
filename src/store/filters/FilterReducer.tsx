type AppState = {
  search: string | number;
  price1: number;
  price2: number;
  sort: string;
  filter: {
    style: {
      wireless: boolean;
      wired: boolean;
      [key: string]: boolean;
    };
    brand: {
      jbl: boolean;
      long: boolean;
      none: boolean;
      [key: string]: boolean;
    };
    color: {
      black: boolean;
      blue: boolean;
      green: boolean;
      gray: boolean;
      plaid: boolean;
      red: boolean;
      [key: string]: boolean;
    };
  };
};

type Action =
  | { type: "search"; payload: string | number }
  | { type: "sort"; payload: string }
  | { type: "price1"; price: number }
  | { type: "price2"; price: number }
  | { type: "style"; style: string }
  | { type: "brand"; brand: string }
  | { type: "color"; color: string }
  | { type: "reset" };

const filters: AppState = {
  search: "",
  price1: 0,
  price2: 100,
  sort: "alphabetical",
  filter: {
    style: {
      wireless: false,
      wired: false
    },
    brand: {
      jbl: false,
      long: false,
      none: false
    },
    color: {
      black: false,
      blue: false,
      green: false,
      gray: false,
      plaid: false,
      red: false
    }
  }
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "search":
      return { ...state, search: action.payload };
    case "sort":
      return { ...state, sort: action.payload };
    case "price1":
      if (action.price < state.price2) {
        return { ...state, price1: action.price };
      }
      return state;
    case "price2":
      if (state.price1 < action.price) {
        return { ...state, price2: action.price };
      }
      return state;
    case "style":
      return {
        ...state,
        filter: {
          ...state.filter,
          style: {
            ...state.filter.style,
            [action.style]: !state.filter.style[action.style]
          }
        }
      };
    case "brand":
      return {
        ...state,
        filter: {
          ...state.filter,
          brand: {
            ...state.filter.brand,
            [action.brand]: !state.filter.brand[action.brand]
          }
        }
      };
    case "color":
      return {
        ...state,
        filter: {
          ...state.filter,
          color: {
            ...state.filter.color,
            [action.color]: !state.filter.color[action.color]
          }
        }
      };
    case "reset":
      return filters;
    default:
      return state;
  }
}

export { filters, reducer };
