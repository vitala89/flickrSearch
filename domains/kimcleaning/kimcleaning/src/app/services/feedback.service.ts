import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {FbResponse } from "../interfaces/fbResponse";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private  http : HttpClient) { }

  create(feedback) {
    return this.http.post(`${environment.fbDbUrl}/feedback.json`, feedback)
      .pipe(map( (res : FbResponse) => {
        return {
          ...feedback,
          id: res.name,
          date: new Date(feedback.date)
        }
      }))
  }

  getAll() {
    return this.http.get(`${environment.fbDbUrl}/feedback.json`)
      .pipe( map ( res => {
        return Object.keys(res)
          .map( key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }))
      }))
  }



  remove (id) {
    return this.http.delete(`${environment.fbDbUrl}/feedback/${id}.json`)
  }



}
