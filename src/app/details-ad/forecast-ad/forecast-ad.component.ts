import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-ad',
  templateUrl: './forecast-ad.component.html',
  styleUrls: ['./forecast-ad.component.less']
})
export class ForecastAdComponent implements OnInit {
  public infos: { title: string, content: string}[];
  constructor() {
    this.infos = [{
      "title": "L'équipement",
      "content": "Vêtements et chaussures adaptées selon la saison. Port de la casquette ou du gilet fluo obligatoire.Guêtres."
    },{
      "title": "Autres",
      "content": "Réserver au moins 1 semaine avant afin de laisser l'équipe de chasse s'organiser et gérer le nombre de participants aux battues.Une cave est également à disposition pour ceux qui souhaitent amener des chiens. A l'avenir un chenil sera construit à cet effet. La chasse sur ce territoire est possible de septembre jusqu'à fin décembre, pas de date en janvier ni février."
    }]
  }

  ngOnInit(): void {
  }

}
