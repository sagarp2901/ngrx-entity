import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Product} from '../../modules/product/models/product.model';
import {ProductActionTypes, ProductActions} from '../actions/product.actions';

export interface ProductsState extends EntityState<Product> {
    productsLoaded: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
export const initialProductsState: ProductsState = adapter.getInitialState({
    productsLoaded: false
});

/**
 * 11. Implements at least one Ngrx reducer
 * @param state 
 * @param action 
 */
export function productsReducers(state = initialProductsState, action: ProductActions) : ProductsState {
    switch(action.type) {
        case ProductActionTypes.GetAllProductsSuccess: {
            return adapter.addAll(action.payload.products, state);
        }
        case ProductActionTypes.GetProductSuccess: {
            return adapter.addOne(action.payload.product, state);
        }
        default:
            return state;
    }
}

export const {selectAll, selectEntities, selectIds, selectTotal} = adapter.getSelectors();