import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Subscription} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  products = [];
  pSub: Subscription;
  rSub: Subscription;

  constructor(private  dataService: DataService,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.pSub = this.dataService.getAll().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  // tslint:disable-next-line:typedef
  remove(id, img) {
    this.rSub = this.dataService.remove(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
      this.dataService.deleteImage(img);
    });
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

  getAvRating(reviews): number {
    let total = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < reviews.length; i++) {
      total += reviews[i].rating;
    }
    return total / reviews.length;
  }
}
