import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCompletePageComponent } from './contact-complete-page.component';

describe('ContactCompletePageComponent', () => {
  let component: ContactCompletePageComponent;
  let fixture: ComponentFixture<ContactCompletePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCompletePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCompletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
