import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  contact: Contact={};
  constructor() { }

  ngOnInit(): void {
    this.contact = {
      firstname: '',
      lastname: '',
      gender: 'male',
      isToc: true,
      email: ''
      };
  }
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
    }
}
export class Contact {
  firstname?: string;
  lastname?: string;
  gender?: string;
  isToc?: boolean;
  email?: string;
  }
