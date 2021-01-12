import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../interfaces/product-interface';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {switchMap, takeUntil} from 'rxjs/operators';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { SelectItem} from 'primeng/api';
import {ATTRIBUTES} from '../../../assets/attributes';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable, pipe, Subject} from 'rxjs';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  imageShow: any = '';
  form: FormGroup;
  submitted: boolean;
  colorData: SelectItem[];
  sizeData: SelectItem[];
  destroy$ = new Subject<any>();
  product: ProductInterface;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.colorData = ATTRIBUTES[0].colors;
    this.sizeData = ATTRIBUTES[0].sizes;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.submitted = false;
    this.formData();
  }

  private formData(): void {
    this.route.params.pipe(
      switchMap( params => {
        return this.dataService.getById(params['id']);
      })
    ).subscribe(product => {
      this.product = product;
      this.form = new FormGroup({
        name: new FormControl(this.product.name, Validators.required),
        description: new FormControl(this.product.description, Validators.required),
        color: new FormControl(this.product.color, Validators.required),
        size: new FormControl(this.product.size, Validators.required),
        price: new FormControl(this.product.price, Validators.required),
        discount: new FormControl(this.product.discount),
        discountUntil: new FormControl(new Date()),
        img: new FormControl(),
        main: new FormControl(this.product.main),
        shipping: new FormControl(this.product.shipping),
        novelty: new FormControl(this.product.novelty),
      });

    });
  }

  private updateFormData(form: Partial<ProductInterface>, link: string): ProductInterface {
    const updatedFormValue = form;
    updatedFormValue.img = link;
    updatedFormValue.imgUrl = [{
      small: link,
      medium: link,
      big: link
    }];

    return updatedFormValue as ProductInterface;
  }
  // tslint:disable-next-line:typedef
  onFileChanged(event) {
    this.dataService.uploadFileToStorage = event.target.files[0];
    return this.storage.storage.refFromURL(this.product.img).delete();
  }
  submit(): void {
    this.dataService
      .createUploadToStorage(this.dataService.uploadFileToStorage)
      .pipe(
        switchMap(link => {
          this.updateFormData(this.form.value, link);
          return this.dataService.update({
            ...this.product,
            name: this.form.value.name,
            description: this.form.value.description,
            color: this.form.value.color,
            size: this.form.value.size,
            price: this.form.value.price,
            discount: this.form.value.discount,
            discountUntil: this.form.value.discountUntil,
            main: this.form.value.main,
            shipping: this.form.value.shipping,
            novelty: this.form.value.novelty,
            img: link,
            imgUrl: [{
              small: link,
              medium: link,
              big: link
            }]
          });
        }),
        takeUntil(this.destroy$)
      ).subscribe(
      res => {},
      error => {},
      () => {
        this.router.navigate(['/dashboard']);
      });
  }


}
