import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-ad',
  templateUrl: './details-ad.component.html',
  styleUrls: ['./details-ad.component.less']
})
export class DetailsAdComponent implements OnInit {
  public details: { topic: string }[];
  constructor() {
    this.details = [
      {"topic": "Description"},
      {"topic": "Informations générales"},
      {"topic": "La chasse"},
      {"topic": "L'accueil"},
      {"topic": "À prévoir"},
      {"topic": "Commentaires et notes"},
    ];
  }

  ngOnInit(): void {
  }

}
