import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-medical-cleaning',
  templateUrl: './medical-cleaning.component.html',
  styleUrls: ['./medical-cleaning.component.scss'],
  providers: [MessageService]
})
export class MedicalCleaningComponent implements OnInit {
  items: MenuItem[];
  activeState: boolean[] = [true, false, false];
  home: MenuItem;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Уборка медицинских учреждений',
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
