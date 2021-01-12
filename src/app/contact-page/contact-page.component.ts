import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  latitude = 46.469391;
  longitude = 30.740883;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(f: NgForm) {
    if (f.invalid) {
      alert('Заполните все поля');
    } else {
      f.reset();
      const allInfo = `Меня зовут ${this.firstName} ${this.lastName}. Мой email ${this.email}. Сообщение ${this.message}`;
      alert(allInfo);
      this.router.navigate(['/contact-complete-page']);
    }

  }

}

