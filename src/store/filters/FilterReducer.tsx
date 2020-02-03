import { IFilter } from "../../data/Interfaces";

type Action =
  | { type: "search"; payload: string | number }
  | { type: "sort"; payload: string }
  | { type: "price1"; price: number }
  | { type: "price2"; price: number }
  | { type: "style"; style: string }
  | { type: "brand"; brand: string }
  | { type: "color"; color: string }
  | { type: "load"; filter: IFilter }
  | { type: "reset" };

const filters: IFilter = {
  search: "",
  price1: 0,
  price2: 100,
  sort: "alphabetical",
  filter: {
    style: [],
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
          style: modify(state.filter.style, action.style)
        }
      };
    case "brand":
      return {
        ...state,
        filter: {
          ...state.filter,
          brand: modify(state.filter.brand, action.brand)
        }
      };
    case "color":
      return {
        ...state,
        filter: {
          ...state.filter,
          color: modify(state.filter.color, action.color)
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
