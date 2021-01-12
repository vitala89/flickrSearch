import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {DataService} from '../../services/data.service';
import {NgForm} from '@angular/forms';
import {ATTRIBUTES} from '../../../assets/attributes';
import {ProductInterface} from '../../interfaces/product-interface';
import {ProductModel} from './models/product.model';
import {Router} from '@angular/router';
import {switchMap, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-new-product-page',
  templateUrl: './new-product-page.component.html',
  styleUrls: ['./new-product-page.component.scss'],
  providers: [MessageService]
})

export class NewProductPageComponent implements OnInit, OnDestroy {
  formModel: ProductInterface;
  submitted: boolean;
  colorData: SelectItem[];
  sizeData: SelectItem[];
  imageShow: any = '';
  destroy$ = new Subject<any>();

  constructor(
    private messageService: MessageService,
    private dataService: DataService,
    private router: Router
  ) {
    // SelectItem API with label-value pairs
    this.colorData = ATTRIBUTES[0].colors;
    this.sizeData = ATTRIBUTES[0].sizes;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.submitted = false;
    this.createProductFormModel();
  }

  private createProductFormModel(): void {
    this.formModel = new ProductModel();
  }

  private updateFormData(form: Partial<ProductInterface>, link: string): ProductInterface {
    const updatedFormValue = form;
    updatedFormValue.id = this.formModel.id;
    updatedFormValue.img = link;
    updatedFormValue.color = form.color;
    updatedFormValue.size = form.size;
    updatedFormValue.reviews = this.formModel.reviews;
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
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.dataService
      .createUploadToStorage(this.dataService.uploadFileToStorage)
      .pipe(
        switchMap(link => {
          const bike = this.updateFormData(form.value, link);
          return this.dataService.create(bike);
        }),
        takeUntil(this.destroy$)
      ).subscribe(
      res => {
      },
      error => {
      },
      () => {
        this.router.navigate(['/dashboard']);
      });
  }
}

