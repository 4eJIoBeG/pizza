import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, orderBy, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://646a5e6270b2302c85e3c2b2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orderBy}${search}`,
    );

    return data;
  },
);
