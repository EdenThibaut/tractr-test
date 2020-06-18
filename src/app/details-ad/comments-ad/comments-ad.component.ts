import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comments-ad',
  templateUrl: './comments-ad.component.html',
  styleUrls: ['./comments-ad.component.less']
})
export class CommentsAdComponent implements AfterViewInit {
  @ViewChildren('quote', {read: ElementRef}) quotes: QueryList<ElementRef>;
  public comments: { name: string, date: string, rate: number, quote: string}[];
  constructor() {
    this.comments = [{
      name: "John",
      date: "17 janvier 2020",
      rate: 4,
      quote: "Superbe expérience ! Je recommande"
    },{
      name: "Marie",
      date: "07 octobre 2019",
      rate: 5,
      quote: "Wooaw ! Tout était parfait ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]
  }

  ngAfterViewInit(): void {
    this.quotes.forEach((quote) => {
      if(quote.nativeElement.childElementCount === 2){
        quote.nativeElement.children[1].innerHTML = "Lire plus";
      }
    });
  }

}
