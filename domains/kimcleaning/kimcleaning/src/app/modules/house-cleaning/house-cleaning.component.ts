import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
@Component({
  selector: 'app-house-cleaning',
  templateUrl: './house-cleaning.component.html',
  styleUrls: ['./house-cleaning.component.scss'],
  providers: [MessageService]
})
export class HouseCleaningComponent implements OnInit {
  items: MenuItem[];
  activeState: boolean[] = [true, false, false];
  home: MenuItem;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Уборка домов',
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
