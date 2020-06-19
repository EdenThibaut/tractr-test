import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.less']
})
export class ItemCarouselComponent implements OnInit {
  @Input() public item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
