import {Injectable} from '@angular/core';
import {ApiEndpoints} from '../constant/api-endpoints.constant';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class StocksService {
    private ws: WebSocket;
    wsObservable: Observable<any>;

    constructor() {
      this.initializeWebSocket(ApiEndpoints.STOCK_WEBSOCKET_URL);
    }

    initializeWebSocket(url) {
        this.wsObservable = Observable.create((observer: Observer<any>) => {
            this.ws = new WebSocket(url);

            this.ws.onclose = (e) => {
                if (e.wasClean) {
                    observer.complete();
                } else {
                    observer.error(e);
                }
            };

            this.ws.onerror = (e) => {
                observer.error(e);
            };

            this.ws.onmessage = (e) => {
                observer.next(JSON.parse(e.data));
            };

            return () => {
                this.ws.close();
            };
        });
    }
}
