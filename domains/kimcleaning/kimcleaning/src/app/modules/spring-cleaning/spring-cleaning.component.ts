import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import { ProductService } from '../../services/productservice';
import {IProductPrice} from "../../interfaces/product-price";
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-spring-cleaning',
  templateUrl: './spring-cleaning.component.html',
  styleUrls: ['./spring-cleaning.component.scss'],
  providers: [MessageService]
})
export class SpringCleaningComponent implements OnInit {
  items: MenuItem[];
  activeState: boolean[] = [true, false, false];
  home: MenuItem;
  productPrice: IProductPrice[];
  constructor(private productService:ProductService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Генеральная Уборка',
      }
    ];

    this.home = {icon: 'pi pi-home', routerLink: '/'};

    this.productService.getProductsPrice().then(data => this.productPrice = data);
  }
  onTabClose(event) {
    this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
  }

  onTabOpen(event) {
    this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  }
  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
}
