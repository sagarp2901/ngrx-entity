import {createSelector, createFeatureSelector} from '@ngrx/store';

import {ProductsState} from '../reducers/products.reducers';

import * as fromProduct from '../reducers/products.reducers';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProductById = (id: string) => createSelector(
    selectProductsState,
    productsState => productsState.entities[id]
);

export const selectAllProducts = createSelector(
    selectProductsState,
    fromProduct.selectAll
);

export const productsLoaded = createSelector(
    selectProductsState,
    productsState => productsState.productsLoaded
)
