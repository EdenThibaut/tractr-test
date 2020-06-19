import { Component, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less']
})
export class SlideComponent implements AfterViewInit {
  @Input() public url: string;

  constructor() {
  }

  ngAfterViewInit(): void {


  }

}
