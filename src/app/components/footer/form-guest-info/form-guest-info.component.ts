import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-form-guest-info',
  templateUrl: './form-guest-info.component.html',
  styleUrls: ['./form-guest-info.component.css'],
})
export class FormGuestInfoComponent implements OnInit {
  validateForm: FormGroup;
  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})'),
        ],
      ],

      service: ['', [Validators.required]],
    });
  }

  ngOnInit() {}
}
