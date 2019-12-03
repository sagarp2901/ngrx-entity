import {Component, OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product.model';
import {Observable} from 'rxjs';

import {GetProduct, GetProductSuccess} from './../../../../store/actions/product.actions';
import {Store, select} from '@ngrx/store';
import { selectProductById } from '@app/store/selectors/product.selectors';
import { tap, switchMap, filter, first } from 'rxjs/operators';
import { AppState } from '@app/store/reducers/app.reducers';

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {
    product$: Observable<Product>;
    
    constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      /**
       * 12. Implements at least two Ngrx actions
       * 14. Implements "select" operator in an observable to retrieve product from state
       * 15. Implements the "tap" operator in the observable to dispatch the GET action
       */
      // Get latest Id from route to fetch product by id
       const id = this.activatedRoute.snapshot.params.id;
       this.product$ = this.store
        .pipe(
            select(selectProductById(id)),
            tap(product => {
                if(!product) {
                    this.store.dispatch(new GetProduct({id}));
                }
            }),
            filter(product => !!product),
            first()
       )
    }

}

