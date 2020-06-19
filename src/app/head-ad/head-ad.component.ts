import { OnInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-head-ad',
  templateUrl: './head-ad.component.html',
  styleUrls: ['./head-ad.component.less']
})
export class HeadAdComponent implements OnInit{
  public tags: { categorie: string, url: string, isOver: boolean}[];
  public iconType: string;
  public tagOver: boolean;
  public tagColor: string;
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    this.tags= [{
      "categorie": "Journée de chasse",
      "url": "#",
      "isOver": false,
    },{
      "categorie": "Grands gibiers",
      "url": "#",
      "isOver": false,
    },{
      "categorie": "Landes",
      "url": "#",
      "isOver": false,
    }];
    this.iconType= "outline";
    this.tagColor= "";
  }

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  handleOverRate(): void{
    this.iconType = "fill";
  }
  handleOutRate(): void{
    this.iconType = "outline";
  }

  handleOverTag(i): void{
    console.log(event);
    this.tags[i].isOver = true;
  }
  handleOutTag(i): void{
    console.log(event);
    this.tags[i].isOver = false;
  }
}
