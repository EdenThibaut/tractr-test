import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DrawerCnx } from "../data.service";

@Component({
  selector: 'app-share-ad',
  templateUrl: './share-ad.component.html',
  styleUrls: ['./share-ad.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareAdComponent implements OnInit {
  public stateCnx: boolean = false;
  private _subscription_stateCnx: any;
  constructor(private _drawerCnx: DrawerCnx) {
    this._subscription_stateCnx = this._drawerCnx.stateDrawer.subscribe((value) => {
      this.stateCnx = value;
    });
  }

  ngOnInit(): void {
  }

  openSignUp(){
    this._drawerCnx.changeState(true);
  }

}
