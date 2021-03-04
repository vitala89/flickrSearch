import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FeedbackService} from "../../services/feedback.service";
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [MessageService]
})
export class ContactsComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  val1: string;
  form: FormGroup;
  submitted = false;

  constructor(private feedbackService: FeedbackService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Контакты',
      }
    ];
    this.home = {icon: 'pi pi-home', routerLink: '/'};

    this.form = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true;

    const feedback = {
      firstname: this.form.value.firstname,
      phone: this.form.value.phone,
      text: this.form.value.text,
      date: new Date()
    };

    console.log(this.form);
    this.feedbackService.create(feedback).subscribe(res => {
      this.form.reset();
      this.submitted = false;
      setTimeout(()=>{
        this.router.navigate(['/'])
      }, 3000);
    })
  }
  showTopCenter() {
    this.messageService.add({key: 'tc', severity:'success', summary: 'Спасибо!', detail: 'В скором времени наш менеджер свяжется с вами.'});
  }
}
