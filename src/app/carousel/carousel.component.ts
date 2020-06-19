import { Component, Directive, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChildren('itemDom', {read: ElementRef}) itemsDom: QueryList<ElementRef>;
  public items: { category: string, title: string, rate: number, comments: number, price: number, img: string}[];
  public nbColumn: number;
  public nbItems: number;
  public paginationMax: number;
  public currentPagination: number;
  public position: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth > 991){
      this.nbColumn = 3;
    }else if(event.target.innerWidth > 767){
      this.nbColumn = 2;
    }else{
      this.nbColumn= 1;
    }
  }

  constructor() {
    this.items = [{
      category: "Bracelet de chasse",
      title: "Bracelet cervidé",
      rate: 4,
      comments: 26,
      price: 175,
      img: "./assets/img/recommandation1.jpg"
    },{
      category: "Journée de chasse",
      title: "Chasse en Gironde",
      rate: 4,
      comments: 18,
      price: 250,
      img: "./assets/img/recommandation2.jpg"
    },{
      category: "Bracelet de chasse",
      title: "Bracelet cervidé",
      rate: 4,
      comments: 26,
      price: 175,
      img: "./assets/img/recommandation1.jpg"
    },{
      category: "Journée de chasse",
      title: "Chasse en Gironde",
      rate: 4,
      comments: 18,
      price: 250,
      img: "./assets/img/recommandation2.jpg"
    },{
      category: "Bracelet de chasse",
      title: "Bracelet cervidé",
      rate: 4,
      comments: 26,
      price: 175,
      img: "./assets/img/recommandation1.jpg"
    },{
      category: "Journée de chasse",
      title: "Chasse en Gironde",
      rate: 4,
      comments: 18,
      price: 250,
      img: "./assets/img/recommandation2.jpg"
    }];
    this.nbItems = 0;
    this.nbColumn = 0;
    this.paginationMax = 0;
    this.currentPagination = 0;
    this.position= 0;
  }

  ngOnInit(): void {
    if(window.innerWidth > 991){
      this.nbColumn = 3;
    }else if(window.innerWidth > 767){
      this.nbColumn = 2;
    }else{
      this.nbColumn= 1;
    }
  }

  ngAfterViewInit(): void{
    this.nbItems = this.itemsDom.length;
    this.paginationMax = this.nbItems - this.nbColumn;
  }

  next():void {
    console.log("suivaaant");
    this.currentPagination = this.currentPagination+1;
    this.position = this.position - 100;
  }

  prev():void {
    console.log("précédeeeent");
    this.currentPagination = this.currentPagination-1;
    this.position = this.position + 100;
  }

}
