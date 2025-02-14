import { combineReducers } from "@reduxjs/toolkit";
import { employeesReducer } from "./employees";

export const rootReducer = combineReducers({
  employees: employeesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
