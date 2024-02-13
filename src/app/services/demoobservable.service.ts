import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoobservableService {
  isConneted!: boolean;
  isConnectedSub: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  login() {
    this.isConneted = true;
    this.isConnectedSub.next(this.isConneted);
  }
  logout() {
    this.isConneted = false;
    this.isConnectedSub.next(this.isConneted);
  }
}
