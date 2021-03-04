import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../../services/orders.service";
import { Subscription } from 'rxjs';
import {FeedbackService} from "../../../services/feedback.service";
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  orders = [];
  pSub: Subscription;
  rSub: Subscription;
  pFeedback: Subscription;
  rFeedback: Subscription;
  feedback = [];

  constructor(
    private ordersService: OrdersService,
  private feedbackService: FeedbackService
  ) { }

  ngOnInit() {
    this.pSub = this.ordersService.getAll().subscribe( orders => {
      this.orders = orders.reverse();
    });


    this.pFeedback = this.feedbackService.getAll().subscribe( feedback => {
      this.feedback = feedback.reverse();
    })
  }

  ngOnDesroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.rSub) {
      this.rSub.unsubscribe()
    }

    if (this.pFeedback) {
      this.pFeedback.unsubscribe()
    }

    if (this.rFeedback) {
      this.rFeedback.unsubscribe()
    }
  }

  remove (id) {
    this.rSub = this.ordersService.remove(id).subscribe( () => {
      this.orders = this.orders.filter( orders => orders.id !== id)
    })
  }

  removeFeedback (id) {
    this.rFeedback = this.feedbackService.remove(id).subscribe( () => {
      this.feedback = this.feedback.filter( feedback => feedback.id !== id)
    })
  }

}
