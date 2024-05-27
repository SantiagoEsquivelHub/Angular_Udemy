import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  storage: 6,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0,),
  //   storage: new FormControl(0),
  // });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    storage: [0, [Validators.required, Validators.min(0)]],
  });

  onSave(): void {
    if (this.myForm.invalid) return;

    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, storage: 0 });

  }
}
