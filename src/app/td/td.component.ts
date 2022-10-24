import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css'],
})
export class TdComponent {
  @ViewChild('signupForm', { static: false }) newForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSub = 'Advanced';
  submitted = false;
  inputDetails = {
    email: '',
    subscription: '',
    password: '',
  };
  onSubmit() {
    console.log(this.newForm.value);
    this.submitted = true;
    this.inputDetails.email = this.newForm.value.email;
    this.inputDetails.subscription = this.newForm.value.subscription;
    this.inputDetails.password = this.newForm.value.password;
    this.newForm.reset();
  }
}
