import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DrawerCnx } from "../../data.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMainComponent implements OnInit {
  //@Output() public openCnx: EventEmitter<void> = new EventEmitter();
  public stateCnx: boolean = false;
  private _subscription_stateCnx: any;

  constructor(private _drawerCnx: DrawerCnx) {
    this._subscription_stateCnx = this._drawerCnx.stateDrawer.subscribe((value) => {
      this.stateCnx = value;
    });
  };

  ngOnInit(): void {
    //this.drawerCnx.currentState.subscribe(stateCnx => this.stateCnx = stateCnx);
  }

  openSignUp(){
    this._drawerCnx.changeState(true);
  }

}
