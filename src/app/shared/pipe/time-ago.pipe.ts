import {ChangeDetectorRef, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {AsyncPipe, DatePipe } from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/map';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe extends AsyncPipe implements PipeTransform, OnDestroy {
  value: Date;
  timer: Observable<string>;
  private alive: boolean;

  constructor(ref: ChangeDetectorRef) {
    super(ref);
    this.alive = true;
  }

  transform(obj: any, args?: any[]): any {
    if (obj instanceof Date) {
      this.value = obj;

      if (!this.timer) {
        this.timer = this.getObservable();
      }

      return super.transform(this.timer);
    }

    return super.transform(obj);
  }

  private getObservable() {
    return TimerObservable.create(0, 1000).takeWhile(() => this.alive).map(() => {
      let result: string;
      // current time
      const now = new Date().getTime();

      // time since message was sent in seconds
      const delta = (now - this.value.getTime()) / 1000;

      // format string
      if (delta < 10) {
        result = 'A few seconds ago';
      } else if (delta < 30) { // sent in last minute
        result = '30 seconds ago';
      } else if (delta < 45) { // sent in last minute
        result = '45 seconds ago';
      } else if (delta < 86400) { // sent on last day
        result = new DatePipe('en-US').transform(this.value, 'h:mm a');
      } else { // sent more than one day ago
        result = new DatePipe('en-US').transform(this.value, 'MMM d, h:mm a');
      }
      return result;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
