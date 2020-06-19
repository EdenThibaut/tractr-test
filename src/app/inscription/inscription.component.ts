import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DrawerInscription, DrawerCnx } from "../data.service";
import { startWith } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InscriptionComponent implements OnInit {
  public visible: boolean;
  public stateCnx: boolean = false;
  private _subscription_stateCnx: any;
  public subscription_stateInscription: Observable<boolean>;
  constructor(private _drawerInscription: DrawerInscription, private _drawerCnx: DrawerCnx) {
    this.subscription_stateInscription = this._drawerInscription.stateDrawer.pipe(startWith(false),);
    this._subscription_stateCnx = this._drawerCnx.stateDrawer.subscribe((value) => {
      this.stateCnx = value;
    });
  }

  ngOnInit(): void {
  }

  openSignUp(){
    this._drawerInscription.changeState(false);
    this._drawerCnx.changeState(true);
  }

  close(): void {
    this._drawerInscription.changeState(false);
  }

}
