import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";

@Component({
  selector: 'app-apart-cleaning',
  templateUrl: './apart-cleaning.component.html',
  styleUrls: ['./apart-cleaning.component.scss'],
  providers: [MessageService]
})

export class ApartCleaningComponent implements OnInit {
  items: MenuItem[];
  activeState: boolean[] = [true, false, false];
  home: MenuItem;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Уборка квартир',
      }
    ];

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  onTabClose(event) {
    this.messageService.add({severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index})
  }

  onTabOpen(event) {
    this.messageService.add({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

}
