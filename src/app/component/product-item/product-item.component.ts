import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
 @Input() product:Product | undefined;
@Output() deletedProductItem: EventEmitter<Product> = new EventEmitter<Product>()

constructor(){}

ngOnInit(): void {
  console.log("---------PRODUCT-ITEM");
  
  console.log(this.product)

} 

handleClickProduct(product: Product | undefined){
  console.log(product);
  
}
deletedProduct(product: Product | undefined){
        console.log(this.deletedProductItem.emit);
        
}
}
