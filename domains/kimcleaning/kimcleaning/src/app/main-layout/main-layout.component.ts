import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label:'Услуги',
        icon:'pi pi-fw pi-user',
        items:[
          {
            label:'Генеральная уборка',
            icon:'pi pi-fw pi-align-left',
            routerLink: ['/spring-cleaning'],
            routerLinkActiveOptions:{exact:true},

          },
          {
            label:'Мойка окон, витрин, фасадов',
            icon:'pi pi-fw pi-align-right',
            routerLink: ['/windows-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Уборка после ремонта',
            icon:'pi pi-fw pi-align-center',
            routerLink: ['/after-repair'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Химчистка мебели',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/dry-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Уборка квартир',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/apart-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Уборка домов',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/house-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Уборка офисов',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/office-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Уборка коммерческих помещений',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/commerce-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Мойка посуды',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/dishwashing'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Уборка магазинов',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/shop-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Уборка медицинских учреждений',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/medical-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Уборка учебных заведений',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/school-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },
          {
            label:'Уборка ресторанов, кафе',
            icon:'pi pi-fw pi-align-justify',
            routerLink: ['/cafe-cleaning'],
            routerLinkActiveOptions:{exact:true},
          },

        ]
      },
      {
        label:'Прайс-лист',
        icon:'pi pi-fw pi-user',
        routerLink: ['/price-list'],
        routerLinkActiveOptions:{exact:true},
      },
      {
        label:'О нас',
        icon:'pi pi-fw pi-user',
        items:[
          {
            label:'Почему мы?',
            icon:'pi pi-fw pi-align-left',
            routerLink: ['/about-us'],
            routerLinkActiveOptions:{exact:true},

          },
          {
            label:'Политика конфиденциальности',
            icon:'pi pi-fw pi-align-left',
            routerLink: ['/privacy-policy'],
            routerLinkActiveOptions:{exact:true},

          },
        ]
      },
      {
        label:'Контакты',
        icon:'pi pi-fw pi-user',
        routerLink: ['/contacts']
      },
      {
        label:'Заказать',
        icon:'pi pi-fw pi-user',
        routerLink: ['/order-page']
      }
    ];
  }

}
