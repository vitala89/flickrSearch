import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import {StopwatchService} from '../service/stopwatch.service'
import {time} from '../interface/time'

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit, OnDestroy {
  startButton: string = 'Start';
  isStarted: boolean = false;
  isWait: boolean = false;
  lastClick: number;
  subscription: Subscription;
  timeForDisplay: time = {
    h: '00',
    m: '00',
    s: '00'
  };
  alert = false;
  showGuide = false;
  timer$: Observable<time>;

  constructor(private stopwatchService: StopwatchService) {
  }

  runStopwatch(): void {
    if (!this.isStarted) {
      if (!this.isWait) {
        this.timer$ = this.stopwatchService.startTimer();
      } else if (this.isWait) {
        let currentTime = (+this.timeForDisplay.h * 3600 + +this.timeForDisplay.m * 60 + +this.timeForDisplay.s) * 1000;
        this.timer$ = this.stopwatchService.startTimer(currentTime);
      }
      this.subscription = this.stopwatchService.timerStream$.subscribe(time => {
        this.timeForDisplay = time;
      });
      this.startButton = 'Stop';
    } else {
      this.stopwatchService.subscription.unsubscribe();
      this.subscription.unsubscribe();
      for (let item in this.timeForDisplay) {
        this.timeForDisplay[item] = "00";
      }
      this.startButton = 'Start';

    }
    this.isStarted = !this.isStarted;
  }

  ngOnInit(): void {
  }

  pauseStopwatch(event): void {
    if (this.lastClick) {
      let diff = event.timeStamp - this.lastClick;
      this.isWait = false;
      if (diff <= 300) {
        console.log("doble click");
        this.subscription.unsubscribe();
        this.stopwatchService.subscription.unsubscribe();
        this.isStarted = false;
        this.isWait = true;
        this.startButton = 'Start';
      }
    }
    this.lastClick = event.timeStamp;
  }

  resetStopwatch(): void {
    this.stopwatchService.resetTimer();
    this.isStarted = true;
    this.startButton = 'Stop';
  }

  showAlert() {
    setTimeout(() => {
      if (!this.isWait)
        this.alert = true;
      setTimeout(() => {
        this.alert = false
      }, 2000)
    }, 300)
  }

  ngOnDestroy(): void {
    this.stopwatchService.subscription.unsubscribe();
    this.subscription.unsubscribe();
  }
}
