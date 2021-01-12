import { Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {ProductInterface} from '../interfaces/product-interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  products: ProductInterface[];
  product: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAll()
      .subscribe(products => {
        this.products = products;
      });
  }
}


