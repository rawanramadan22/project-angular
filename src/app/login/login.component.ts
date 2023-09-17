import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  product: any = {
    productEmail: "",
    productPassword: null
  }

  submitAddProductForm(productForm: any) {
    console.log(this.product);

    // Store the login data in local storage
    localStorage.setItem('loginData', JSON.stringify(this.product));

    // Clear the input fields
    this.product.productEmail = "";
    this.product.productPassword = null;

    // Reset the form validation state
    productForm.resetForm();
  }
}