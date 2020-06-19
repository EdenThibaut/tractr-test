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
  public dates: {date: string, debut: string, fin: string, place: string, stock: boolean}[];
  public dateSelected: any;
  public dateIsSelected: boolean;
  public canBooking: boolean;
  constructor(private _drawerCnx: DrawerCnx) {
    this._subscription_stateCnx = this._drawerCnx.stateDrawer.subscribe((value) => {
      this.stateCnx = value;
    });

    this.dates = [{
      date: "17 octobre 2020",
      debut: "08:00",
      fin: "18:00",
      place: "6/6",
      stock: true
    },
    {
      date: "17 octobre 2020",
      debut: "08:00",
      fin: "18:00",
      place: "0/6",
      stock: false
    },
    {
      date: "17 octobre 2020",
      debut: "08:00",
      fin: "18:00",
      place: "6/6",
      stock: true
    }];
    this.dateIsSelected= false;
    this.dateSelected = {};
    this.canBooking = false;
  }

  ngOnInit(): void {
  }

  openSignUp(){
    this._drawerCnx.changeState(true);
  }

  handleDate(value: number){
    this.dateIsSelected= true;
    this.dateSelected= this.dates[value];
    if(this.dateSelected.stock){
      this.canBooking= true;
    }else{
      this.canBooking= false;
    }
  }

}
