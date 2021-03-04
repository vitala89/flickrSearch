import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {OrdersService} from "../../services/orders.service";
// @ts-ignore
import {Services} from "../../interfaces/services";
// @ts-ignore
import {Place} from "../../interfaces/place";
// @ts-ignore
import {Kitchen} from "../../interfaces/kitchen";
// @ts-ignore
import {Window} from "../../interfaces/window";
// @ts-ignore
import {DryCleaning} from "../../interfaces/dryCleaning";
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  providers:[MessageService]
})
export class OrderPageComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  form: FormGroup;
  submitted = false;
  services:Services[];
  selectedServices:Services;
  place:Place[];
  selectedPlace:Place;
  meters:number = 1;
  toilet:number = 1;
  value2:string;
  value4:string;
  kitchen:Kitchen[];
  selectedKitchen:Kitchen;
  window:Window[];
  selectedWindow:Window;
  dryCleaning:DryCleaning[];
  selectedDryCleaning:DryCleaning;

  constructor(
    private orderService: OrdersService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.services = [
      {name: 'Генеральная уборка'},
      {name: 'Уборка после ремонта'}
    ];
    this.place = [
      {name: 'Квартира'},
      {name: 'Дом'},
      {name: 'Офис'}
    ];
    this.kitchen = [
      {name: 'Без кухни'},
      {name: 'Глубокая (бытовая техника и шкафы полностью внутри)'},
      {name: 'Частичная (количество и вид мытья оговаривется отдельно)'},
      {name: 'Снаружи (бытовая техника и шкафы снаружи)'}
    ];
    this.window = [
      {name: 'Без мытья окон'},
      {name: 'С мытьем окон'},
    ];
    this.dryCleaning = [
      {name: 'Без химчистки мебели'},
      {name: 'С химчисткой мебели'},
    ];
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Заказать',
      }
    ];
    this.home = {icon: 'pi pi-home', routerLink: '/'};

    this.form = new FormGroup({
      service: new FormControl(null, Validators.required),
      place: new FormControl(null, Validators.required),
      meters: new FormControl(null, Validators.required),
      toilet: new FormControl(null, Validators.required),
      kitchen: new FormControl(null, Validators.required),
      window: new FormControl(null, Validators.required),
      dryCleaning: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true;

    const order = {
      service: this.form.value.service,
      place: this.form.value.place,
      meters: this.form.value.meters,
      toilet: this.form.value.toilet,
      kitchen: this.form.value.kitchen,
      window: this.form.value.window,
      dryCleaning: this.form.value.dryCleaning,
      name: this.form.value.name,
      phone: this.form.value.phone,
      date: new Date()
    };

    console.log(this.form);
    this.orderService.create(order).subscribe(res => {
      this.form.reset();
      this.submitted = false;
      setTimeout(()=>{
        this.router.navigate(['/'])
      }, 3000);
    })
  }
  showTopCenter() {
    this.messageService.add({key: 'tc', severity:'success', summary: 'Спасибо за заказ!', detail: 'В скором времени наш менеджер свяжется с вами.'});
  }
}
