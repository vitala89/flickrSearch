import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {last, map, switchMap} from 'rxjs/operators';
import {FbresponseInterface} from '../interfaces/fbresponse-interface';
import {ProductInterface} from '../interfaces/product-interface';
import {EMPTY, from, Observable, of} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireDatabase} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  uploadFileToStorage: File = null;
  product: ProductInterface;
  constructor(
    private http: HttpClient,
    private storage: AngularFireStorage,
    private db: AngularFireDatabase
  ) {
  }

  public createUploadToStorage(file: File): Observable<any> {
    if ( file === null) {
      return of(null);
    }
    const filePath = `/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    return task.snapshotChanges()
      .pipe(
        last(),
        switchMap(() => ref.getDownloadURL())
      );
  }

  // tslint:disable-next-line:typedef
  deleteImage(downloadUrl) {
    return this.storage.storage.refFromURL(downloadUrl).delete();
  }

  // tslint:disable-next-line:typedef
  create(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post(`${environment.fbDbUrl}/products.json`, product)
      .pipe(map((res: FbresponseInterface) => {
        return {
          ...product,
          id: res.name,
        };
      }));
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get(`${environment.fbDbUrl}/products.json`)
      .pipe(map(res => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key,
          }));
      }));
  }

  // tslint:disable-next-line:typedef
  getById(id) {
    return this.http.get(`${environment.fbDbUrl}/products/${id}.json`)
      .pipe(map((product: ProductInterface) => {
        return {
          ...product,
          id,
        };
      }));
  }

  // tslint:disable-next-line:typedef
  remove(id) {
    return this.http.delete(`${environment.fbDbUrl}/products/${id}.json`);
  }

  // tslint:disable-next-line:typedef
  update(product) {
    return this.http.patch(`${environment.fbDbUrl}/products/${product.id}.json`, product);
  }

}
