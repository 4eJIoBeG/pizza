export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  count: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type SearchPizzaParams = {
  sortBy: string;
  orderBy: string;
  category: string;
  search: string;
  currentPage: string;
};
