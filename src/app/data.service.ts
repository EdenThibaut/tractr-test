import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DrawerCnx {
  stateDrawer: Subject<any> = new Subject<any>();

  constructor() { }

  changeState(state: boolean){
    this.stateDrawer.next(state);
  }
}

@Injectable()
export class DrawerInscription {
  stateDrawer: Subject<any> = new Subject<any>();

  constructor() { }

  changeState(state: boolean){
    this.stateDrawer.next(state);
  }
}

@Injectable()
export class DrawerMenu {
  stateDrawer: Subject<any> = new Subject<any>();

  constructor() { }

  changeState(state: boolean){
    this.stateDrawer.next(state);
  }
}
