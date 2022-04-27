import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { ProductListService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Book[] = [];

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productListService.getBooks().subscribe(data =>  {
      this.products = data;
    })
  }

}
