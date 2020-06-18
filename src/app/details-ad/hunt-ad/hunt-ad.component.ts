import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hunt-ad',
  templateUrl: './hunt-ad.component.html',
  styleUrls: ['./hunt-ad.component.less']
})
export class HuntAdComponent implements OnInit {
  public infos: {}[];
  constructor() {
    this.infos = [{
      type: "texte",
      title: "Encadrement (guide, chef de battue, hôte…)",
      content: "Oui"
    },{
      type: "liste",
      title: "Arme(s) autorisée(s)",
      items: ["Arc", "Fusil", "Carabine"]
    },{
      type: "texte",
      title: "Prêt d'arme",
      content: "Non"
    },{
      type: "texte",
      title: "Possibilité de venir accompagné par un non chasseur",
      content: "Oui"
    },{
      type: "texte",
      title: "Possibilité de venir avec ses chiens",
      content: "Oui"
    },{
      type: "texte",
      title: "Possibilité de chasser avec les chiens de l'hôte",
      content: "Oui"
    },{
      type: "texte",
      title: "Venaison",
      content: "Incluse"
    },{
      type: "texte",
      title: "Cette journée de chasse peut accueillir un fauconnier et son oiseau",
      content: "Non"
    }]
  }

  ngOnInit(): void {
  }

}
