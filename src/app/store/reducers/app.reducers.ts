import { ActionReducerMap } from "@ngrx/store";
import {routerReducer} from '@ngrx/router-store';
import { productsReducers } from "./products.reducers";


export interface AppState {}

export const appReducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    products: productsReducers
};