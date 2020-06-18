import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ad',
  templateUrl: './home-ad.component.html',
  styleUrls: ['./home-ad.component.less']
})
export class HomeAdComponent implements OnInit {
  public infos: { title: string, content: string}[];
  constructor() {
    this.infos = [{
      "title": "Repas",
      "content": "Non inclus"
    },{
      "title": "En-cas et apéritif",
      "content": "Inclus"
    },{
      "title": "Possibilité de loger chez l'hôte",
      "content": "Oui"
    },{
      "title": "Conseils sur l'hébergement",
      "content": "2 gîtes de chasse sur la commune de Gourdon pour 20€/nuit + chambre d'hôte avec restauration à moins de 5 km."
    },{
      "title": "Chenil à disposition",
      "content": "Oui"
    }]
  }

  ngOnInit(): void {
  }

}
