import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-ad',
  templateUrl: './description-ad.component.html',
  styleUrls: ['./description-ad.component.less']
})
export class DescriptionAdComponent implements OnInit {
  public infos: { title: string, content: string}[];
  constructor() {
    this.infos = [{
      "title": "Description du territoire de chasse",
      "content": "Territoire ardèchois à couper le souffle sur plus de 1200ha. Vous pourrez apprécier une topographie assez vallonée renvoyant l'écho des belles menées sur sanglier ou chevreuil. De quoi en prendre plein les oreilles et procurer d'intenses montées d'adrénaline pour les postés. La beauté et la grande diversité des paysages présents sur le territoire de chasse fera de votre journée de chasse une expérience inoubliable. Il s'agit d'un biotope idéal pour le sanglier et essentiellement constitué de genêts, de chênes blancs et verts ainsi que de nombreux buissons noirs. Une alternance entre montagne et plaine fera de chaque traque une expérience nouvelle. Sans oublier la dominance du chataigner offrant de quoi se nourrir à la population de sangliers. Côté tourisme, vous pourrez également apprécier la richesse du département en terme de sites touristiques : Gorges de l'Ardèche situées à 45 min, Mont-Gerbier-de-Jonc, Musée de la laine... sont autant de lieux à visiter."
    },{
      "title": "Description de la chasse",
      "content": "Week-end de chasse aux sangliers et aux chevreuils qui débute par un rendez-vous au centre du village de Gourdon, à 10h et ce après avoir effectué les traces à partir de 7h00. Une fois les animaux localisés, la pause déjeuner à lieu vers 10h30 et s'en suit alors 2 voir 3 traques dans la journée. Chacun amène de quoi manger. Suite à l'annonce des consignes de sécurité, vous serez posté avec les membres de l'équipe et profiterez de la belle musique des chiens pour éventuellement avoir la chance de prélever un animal devant ces derniers. La dernière battue de la journée se termine généralement sur les coups de 17h afin de se retrouver au local , se remémorer la chasse et partager un bon moment de convivialité avec l'équipe.Vous aurez également l'occasion de participer au dépeçage des animaux prélevés durant la journée et même de goûter les abats (foie, coeur) autour d'un petit repas organisé le samedi soir. Le tableau annuel s'élève à 70-100 sangliers ainsi que 20 chevreuils en moyenne.L'esprit partage et convivialité est primordial et vous fera passer une excellente expérience. Vous avez également la possibilité de loger chez l'hôte, lequel met à disposition deux gîtes de chasse pour 20€ la nuit.Si ces derniers sont déjà réservés, il y a également des gîtes et chambres d'hôtes avec restauration à moins de 5 km."
    },{
      "title": "Densité du gibier chassé",
      "content": "Moyenne"
    },{
      "title": "Territoire ouvert",
      "content": "Oui"
    }]
  }

  ngOnInit(): void {
  }

}
