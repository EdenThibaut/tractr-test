import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DrawerCnx, DrawerInscription, DrawerMenu } from "../../data.service";
import { startWith } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMobileComponent implements OnInit {
  public visible: boolean;
  public stateInscription: boolean = false;
  private _subscription_stateInscription: any;
  public stateCnx: boolean = false;
  private _subscription_stateCnx: any;
  public subscription_stateMenu: Observable<boolean>;
  constructor(private _drawerMenu: DrawerMenu, private _drawerCnx: DrawerCnx, private _drawerInscription: DrawerInscription) {
    this.subscription_stateMenu = this._drawerMenu.stateDrawer.pipe(startWith(false),);

    this._subscription_stateCnx = this._drawerCnx.stateDrawer.subscribe((value) => {
      this.stateCnx = value;
    });
    this._subscription_stateInscription = this._drawerInscription.stateDrawer.subscribe((value) => {
      this.stateInscription = value;
    });
  }

  ngOnInit(): void {
  }

  openSignOn(){
    this._drawerMenu.changeState(false);
    this._drawerInscription.changeState(true);
  }

  openSignUp(){
    this._drawerMenu.changeState(false);
    this._drawerCnx.changeState(true);
  }

  close(): void {
    this._drawerMenu.changeState(false);
  }

}
