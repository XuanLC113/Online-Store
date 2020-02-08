import { IFilter } from "../../data/Interfaces";

type Action =
  | { type: "search"; payload: string | number }
  | { type: "sort"; payload: string }
  | { type: "price"; payload: number[] }
  | { type: "feature"; payload: string }
  | { type: "brand"; payload: string }
  | { type: "color"; payload: string }
  | { type: "load"; filter: IFilter }
  | { type: "reset" };

const filters: IFilter = {
  search: "",
  price: [],
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

function modifyPrice(arr: number[][], value: number[]): number[][] {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === value[0]) {
      arr.splice(i, 1);
      return arr;
    } else if (arr[i][0] > value[0]) {
      arr.splice(i, 0, value);
      return arr;
    }
  }
  arr.push(value);
  return arr;
}

function reducer(state: IFilter, action: Action): IFilter {
  switch (action.type) {
    case "search":
      return { ...state, search: action.payload };
    case "sort":
      return { ...state, sort: action.payload };
    case "price":
      return { ...state, price: modifyPrice(state.price, action.payload) };
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
