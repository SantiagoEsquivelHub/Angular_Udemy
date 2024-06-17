import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoritesGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  })

  public newFavorite: FormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) { }

  get favoritesGames() {
    return this.myForm.controls["favoritesGames"] as FormArray;
  }

  getFieldError(field: string): string | null {

    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {

      switch (key) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `This field must have at least ${errors[key].requiredLength} characters`;
        case 'min':
          return `This field must be ${errors[key].min} or greater`;

      }
    }
    return null;
  }

  isValidField(field: string): boolean | null | ValidationErrors {
    return this.myForm.controls[field].touched && this.myForm.controls[field].errors;
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].touched && formArray.controls[index].errors;
  }


  onAddToFavorites(): void {
    if (this.newFavorite.invalid) return;

    // this.favoritesGames.push(new FormControl(this.newFavorite.value, Validators.required));
    this.favoritesGames.push(this.fb.control(this.newFavorite.value, Validators.required));

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void {
    this.favoritesGames.removeAt(index);
  }

  onSubmit(): void {

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls["favoritesGames"] as FormArray) = this.fb.array([])
    this.myForm.reset();
  }

}
