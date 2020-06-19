import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DrawerCnx, DrawerInscription } from "../../data.service";

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMainComponent implements OnInit {
  public stateCnx: boolean = false;
  public stateInscription: boolean = false;
  private _subscription_stateCnx: any;
  private _subscription_stateInscription: any;

  constructor(private _drawerCnx: DrawerCnx, private _drawerInscription: DrawerInscription) {
    this._subscription_stateCnx = this._drawerCnx.stateDrawer.subscribe((value) => {
      this.stateCnx = value;
    });
    this._subscription_stateInscription = this._drawerInscription.stateDrawer.subscribe((value) => {
      this.stateInscription = value;
    });
  };

  ngOnInit(): void {
    //this.drawerCnx.currentState.subscribe(stateCnx => this.stateCnx = stateCnx);
  }

  openSignUp(){
    this._drawerCnx.changeState(true);
  }

  openSignOn(){
    this._drawerInscription.changeState(true);
  }

}
