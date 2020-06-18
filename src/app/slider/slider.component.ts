import { Component, OnInit, ViewChild} from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  @ViewChild(NzCarouselComponent, { static: false }) slider: NzCarouselComponent;
  public images: string[];
  public effect: string;
  constructor() {
    this.images = [
      "./assets/img/slide1.jpg",
      "./assets/img/slide2.jpg",
      "./assets/img/slide3.jpg",
    ];
    this.effect = 'scrollx';
  }

  ngOnInit(): void {
  }
  next():void {
    this.slider.next();
  }

  prev():void {
    this.slider.pre();
  }

}
