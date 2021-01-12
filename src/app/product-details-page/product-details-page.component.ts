import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faMagic, faShoppingCart, faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome'; // Add icons to the library for convenient access in other components
import {Subscription} from 'rxjs';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {FormGroup} from '@angular/forms';
import {DataService} from '../services/data.service';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss'],
})

export class ProductDetailsPageComponent implements OnInit, OnDestroy {
  product$;
  selectedColor: string;
  selectedSize: string;
  form: FormGroup;
  showText = false;
  subscription: Subscription;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    library: FaIconLibrary,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    // Add multiple icons to the library
    library.addIcons(faMagic, faShoppingCart, faStar, faStarHalfAlt);
  }

  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(switchMap(params => {
        return this.dataService.getById(params['id']);
      }));


    this.form = new FormGroup({});
    this.galleryOptions = [
      {
        width: '480px',
        height: '400px',
        layout: 'NgxGalleryLayout.Bottom',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
  }
  // tslint:disable-next-line:typedef
  selectChangeColor(event: any) {
    this.selectedColor = event.target.value;
  }

  // tslint:disable-next-line:typedef
  selectChangeSize(event: any) {
    this.selectedSize = event.target.value;
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
