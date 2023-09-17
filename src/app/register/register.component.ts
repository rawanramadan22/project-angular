import { Component } from '@angular/core';
import {AbstractControl, ValidationErrors , FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  productForm: FormGroup;
  product: any = {
    productName: '',
    productEmail: '',
    productDescriptation: '',
    productPassword: null,
    repeatPassword: ''
  };

  constructor(private formBuilder: FormBuilder) {
    this.productForm = formBuilder.group({
      productName: ['', Validators.required],
      productEmail: ['', [Validators.required, Validators.email]],
      productDescriptation: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
      productPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]+$/),
        ],
      ],
      repeatPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.passwordMatchValidator.bind(this),
        ],
      ],
    });
  }
  submitAddProductForm(productForm: any) {
    console.log(this.product);

    localStorage.setItem('loginData', JSON.stringify(this.product));
    productForm.resetForm();
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = this.productForm?.get('productPassword')?.value;
    const confirmPassword = control.value;
  
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

}