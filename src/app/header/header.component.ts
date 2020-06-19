import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DrawerMenu } from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public stateMenu: boolean = false;
  private _subscription_stateMenu: any;
  constructor(private _drawerMenu: DrawerMenu) {
    this._subscription_stateMenu = this._drawerMenu.stateDrawer.subscribe((value) => {
      this.stateMenu = value;
    });
  }

  ngOnInit(): void {
  }

  openMenu(){
    this._drawerMenu.changeState(true);
  }

}
