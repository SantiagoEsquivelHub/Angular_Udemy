import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ["M", Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  public person = {
    gender: 'F',
    wantNotifications: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({ ...this.person });
  }

  getFieldError(field: string): string | null {

    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {

      switch (key) {
        case 'required':
          return 'This field is required';
      }
    }
    return null;
  }

  isValidField(field: string): boolean | null | ValidationErrors {
    return this.myForm.controls[field].touched && this.myForm.controls[field].errors;
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAsTouched();
      return;
    }

    console.log(this.myForm.value);

    const { termsAndConditions, ...newPerson } = this.myForm.value
    this.person = newPerson;
  }

}
