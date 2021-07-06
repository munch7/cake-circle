import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  form: NgForm;
  default1 = 'kiambu';
  defaultQuestion = 'Vanilla';
  user = {
    name: '',
    phone: '',
    location: '',
  }
  order = '';
  amount = '';
  date = '';
  submitted = false;
  
  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;
    this.user.name = form.value.userData.name;
    this.user.phone = form.value.userData.contact;
    this.user.location = form.value.userData.location;
    this.order = form.value.productData.product;
    this.amount = form.value.productData.quantity;
    this.date = form.value.productData.date;
    this.form.reset();
  }

}
