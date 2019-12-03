import {Component, OnInit, Input} from '@angular/core';
import { Product } from '../../models/product.model';

/** 
 * 6. Implements at least one dumb or presentational component that does not make use of services for displaying product 
 */
@Component({
    selector: 'product-view',
    templateUrl: 'product-view.component.html'
})
export class ProductViewComponent implements OnInit {
    @Input() product: Product;
    constructor() {}
    ngOnInit(){}
}