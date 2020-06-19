import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DrawerCnx } from "../../data.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-options-ad',
  templateUrl: './options-ad.component.html',
  styleUrls: ['./options-ad.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsAdComponent implements OnInit {
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
