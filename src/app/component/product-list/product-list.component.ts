import { Component, Input } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
// import { DatePipe} from '@angular/common';
import { JsonPipe } from '@angular/common';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products:Product[]=[]

    constructor(){}

    ngOnInit(){

      this.products=[
        {
         _id:'new Date().toString()',
          name:'Casquette plate noire',
         description:'Casquette plate noire ajustée 59FIFTY Essential New York Yankees MLB New Era',
         category:['casquette','Homme'],
         imageUrl:[
          '/assets/images/products/casquette_1/1.webp',
          '/asset/images/products/casquette_1/2.webp',
          '/asset/images/products/casquette_1/3.webp',
          '/asset/images/products/casquette_1/4.webp'
        ],
         sold_price: 1599,
         regular_price: 2599,
         created_at: new Date(),
        },
    
        {
          _id:'new Date().toString()',
          name:'casquette-courbee',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_2/1.webp',
           '/asset/images/products/casquette_2/2.webp',
           '/asset/images/products/casquette_2/3.webp',
           '/asset/images/products/casquette_2/4.webp'
         ],
          sold_price: 1999,
          regular_price: 2999,
          created_at: new Date(),
         },
    
         {
          _id:'new Date().toString()',
          name:'casquette-plate',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_3/1.webp',
           '/asset/images/products/casquette_3/2.webp',
           '/asset/images/products/casquette_3/3.webp',
           '/asset/images/products/casquette_3/4.webp'
         ],
          sold_price: 3595,
          regular_price: 4800,
          created_at: new Date(),
         },
    
         {
    
    _id:'new Date().toString()',
    name:'casquette-vert',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_5/1.webp',
           '/asset/images/products/casquette_5/2.webp',
           '/asset/images/products/casquette_5/3.webp',
           '/asset/images/products/casquette_5/4.webp'
         ],
          sold_price: 3245,
          regular_price: 8544,
          created_at: new Date(),
         },
    
         {
          _id:'new Date().toString()',
          name:'Casquette plate bleue',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_4/1.webp',
           '/asset/images/products/casquette_4/2.webp',
           '/asset/images/products/casquette_4/3.webp',
           '/asset/images/products/casquette_4/4.webp'
         ],
          sold_price:1236,
          regular_price: 5244,
          created_at: new Date(),
         },
    
         {
          _id:'new Date().toString()',
          name:'casquette-plate-marine',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_6/1.webp',
           '/asset/images/products/casquette_6/2.webp',
           '/asset/images/products/casquette_6/3.webp',
           '/asset/images/products/casquette_6/4.webp'
         ],
          sold_price:2365,
          regular_price: 8554,
          created_at: new Date(),
         },
    
         {
          _id:'new Date().toString()',
          name:'casquette-courbé',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_7/1.webp',
           '/asset/images/products/casquette_7/2.webp',
           '/asset/images/products/casquette_7/3.webp',
           '/asset/images/products/casquette_7/4.webp'
         ],
          sold_price:8955,
          regular_price: 12336,
          created_at: new Date(),
         },
    
         {
          _id:'new Date().toString()',
          name:'casquette-courbée-rouge',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_8/1.webp',
           '/asset/images/products/casquette_8/2.webp',
           '/asset/images/products/casquette_8/3.webp',
           '/asset/images/products/casquette_8/4.webp'
         ],
          sold_price:6588,
          regular_price: 9244,
          created_at: new Date(),
         },
    
         {
          _id:'new Date().toString()',
    
          name:'casquette-plate-marine',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_9/1.webp',
           '/asset/images/products/casquette_9/2.webp',
           '/asset/images/products/casquette_9/3.webp',
           '/asset/images/products/casquette_9/4.webp'
         ],
          sold_price:2546,
          regular_price: 3654,
          created_at: new Date(),
         },
    
    
         {
          _id:'new Date().toString()',
          name:'casquette-courbe-jaune',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_10/1.webp',
           '/asset/images/products/casquette_10/2.webp',
           '/asset/images/products/casquette_10/3.webp',
           '/asset/images/products/casquette_10/4.webp'
         ],
          sold_price:7564,
          regular_price: 9254,
          created_at: new Date(),
         },
    
         {
          _id:'new Date().toString()',
    
          name:'casquette-courbé-blanc',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_11/1.webp',
           '/asset/images/products/casquette_11/2.webp',
           '/asset/images/products/casquette_11/3.webp',
           '/asset/images/products/casquette_11/4.webp'
         ],
          sold_price:3698,
          regular_price: 6587,
          created_at: new Date(),
         },
    
         {
          _id:'new Date().toString()',
    
          name:'casquette-courbé-blanc',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_12/1.webp',
           '/asset/images/products/casquette_12/2.webp',
           '/asset/images/products/casquette_12/3.webp',
           '/asset/images/products/casquette_12/4.webp'
         ],
          sold_price:6354,
          regular_price: 25443,
          created_at: new Date(),
         },

         {
          _id:'new Date().toString()',
    
          name:'casquette-courbé-blanc',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_14/1.webp',
           '/asset/images/products/casquette_14/2.webp',
           '/asset/images/products/casquette_14/3.webp',
           '/asset/images/products/casquette_14/4.webp'
         ],
          sold_price:1965,
          regular_price: 3255,
          created_at: new Date(),
         },


         {
          _id:'new Date().toString()',
    
          name:'casquette-courbé-rose',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_15/1.webp',
           '/asset/images/products/casquette_15/2.webp',
           '/asset/images/products/casquette_15/3.webp',
           '/asset/images/products/casquette_15/4.webp'
         ],
          sold_price:1895,
          regular_price: 6587,
          created_at: new Date(),
         },

         {
          _id:'new Date().toString()',
    
          name:'casquette-courbé-rose',
          description:'Casquette courbée noire ajustée avec logo noir 39THIRTY Classic New York Yankees MLB New Era',
          category:['casquette','Homme'],
          imageUrl:[
           '/assets/images/products/casquette_16/1.webp',
           '/asset/images/products/casquette_16/2.webp',
           '/asset/images/products/casquette_16/3.webp',
           '/asset/images/products/casquette_16/4.webp'
         ],
          sold_price:1895,
          regular_price: 6587,
          created_at: new Date(),
         }
         
      ]

      

    }

    hande

}
