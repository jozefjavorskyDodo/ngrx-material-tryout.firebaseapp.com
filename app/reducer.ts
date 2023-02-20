
import { createReducer, on } from "@ngrx/store";

import { plus_one, minus_one, zeroize } from "./actions";

export const initialState: number = 0;

export const stateReducer = createReducer(
    initialState,
    on(plus_one, (state) => state + 1),
    on(minus_one, (state) => state - 1),
    on(zeroize, (state) => 0)
);