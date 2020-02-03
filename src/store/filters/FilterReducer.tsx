import { IFilter } from "../../data/Interfaces";

type Action =
  | { type: "search"; payload: string | number }
  | { type: "sort"; payload: string }
  | { type: "price1"; payload: number }
  | { type: "price2"; payload: number }
  | { type: "feature"; payload: string }
  | { type: "brand"; payload: string }
  | { type: "color"; payload: string }
  | { type: "load"; filter: IFilter }
  | { type: "reset" };

const filters: IFilter = {
  search: "",
  price1: 0,
  price2: 100,
  sort: "alphabetical",
  filter: {
    feature: [],
    brand: [],
    color: []
  }
};

function modify(arr: string[], value: string): string[] {
  let position = arr.indexOf(value);
  if (position === -1) {
    return arr.concat(value);
  }
  arr.splice(position, 1);
  return arr;
}

function reducer(state: IFilter, action: Action): IFilter {
  switch (action.type) {
    case "search":
      return { ...state, search: action.payload };
    case "sort":
      return { ...state, sort: action.payload };
    case "price1":
      if (action.payload < state.price2) {
        return { ...state, price1: action.payload };
      }
      return state;
    case "price2":
      if (state.price1 < action.payload) {
        return { ...state, price2: action.payload };
      }
      return state;
    case "feature":
      return {
        ...state,
        filter: {
          ...state.filter,
          feature: modify(state.filter.feature, action.payload)
        }
      };
    case "brand":
      return {
        ...state,
        filter: {
          ...state.filter,
          brand: modify(state.filter.brand, action.payload)
        }
      };
    case "color":
      return {
        ...state,
        filter: {
          ...state.filter,
          color: modify(state.filter.color, action.payload)
        }
      };
    case "load":
      return action.filter;
    case "reset":
      return filters;
    default:
      return state;
  }
}

export { filters, reducer };
