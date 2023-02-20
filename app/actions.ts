import { createAction } from "@ngrx/store";

export const plus_one = createAction("increment");

export const minus_one = createAction("decrement");

export const zeroize = createAction("reset");