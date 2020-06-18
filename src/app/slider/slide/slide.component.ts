import { Component, AfterViewInit, Input, ElementRef, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less']
})
export class SlideComponent implements AfterViewInit {
  @Input() public url: string;
  @ViewChild('slide', {read: ElementRef}) slide: ElementRef;
  topPosition: number;
  leftPosition: number;
  constructor() {
  }

  ngAfterViewInit(): void {

    let elem = this.slide;

    setTimeout(() => {
      this.topPosition = this.slide.nativeElement.height / 2;
      this.leftPosition = this.slide.nativeElement.width / 2;
    }, 1000);
  }

}
