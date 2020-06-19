import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DrawerCnx {
  stateDrawer: Subject<any> = new Subject<any>();

  constructor() { }

  changeState(stateCnx: boolean){
    this.stateDrawer.next(stateCnx);
  }
}
