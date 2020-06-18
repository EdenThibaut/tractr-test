import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-informations-ad',
  templateUrl: './informations-ad.component.html',
  styleUrls: ['./informations-ad.component.less']
})
export class InformationsAdComponent implements OnInit {
  public infos: any;
  public options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 14,
    disableDefaultUI: true
  }
  public dateSelected: any;
  public dateIsSelected: boolean;

  constructor(private sanitized: DomSanitizer) {
    this.infos = [{
      type: "texte",
      title: "Catégorie",
      content: "Journée de chasse"
    },{
      type: "texte",
      title: "Type de chasse",
      content: "Grands gibiers"
    },{
      type: "texte",
      title: "Mode de chasse",
      content: "Battue"
    },{
      type: "texte",
      title: "Gibier chassé",
      content: ""
    },{
      type: "lieu",
      title: "Lieu",
      adress: "07000 Gourdon"
    },{
      type: "prix",
      title: "Prix (€)",
      price: "32"
    },{
      type: "dates",
      title: "Dates, horaires, participants",
      dates : [{
          date: "17 octobre 2020",
          debut: "08:00",
          fin: "18:00",
          place: "6/6"
        },{
          date: "24 octobre 2020",
          debut: "08:00",
          fin: "18:00",
          place: "4/6"
        },{
          date: "14 novembre 2020",
          debut: "08:00",
          fin: "18:00",
          place: "1/6"
        }]
    },{
      type: "texte",
      title: "Statut de l'hôte",
      content: "Associatif"
    },{
      type: "cadre",
      title: "Conditions d'annulation",
      content: this.sanitized.bypassSecurityTrustHtml("<p>Annulation gratuite de la réservation pendant 48 heures.</p>"
                                                      +"<p>De la période allant de 48 heures après la réservation jusqu’à 7 jours avant l’expérience, annulation avec des frais. Ensuite, annulation impossible.</p>"
                                                      +"<p>Si la réservation est faite à moins de 9 jours de l’expérience, annulation possible gratuite pendant 48 heures. Ensuite, annulation impossible.</p>")
    }];

    this.dateIsSelected= false;
    this.dateSelected = {};
   }

  ngOnInit(): void {
  }

  handleDate(value: number){
    this.dateIsSelected= true;
    this.dateSelected= this.infos[6].dates[value];
  }

}
