import { CustomValidators } from './../shared/custom-validators';
import { WhatWeCanDo, whatWeCanDo } from './../texts/coaching';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'tor-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.scss']
})
export class CoachingComponent implements OnInit {

  public whatWeCanDo: WhatWeCanDo[] = whatWeCanDo;
  public reservationForm: FormGroup;
  public showErrors: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public saveData() {
    if (this.reservationForm.valid) {
     console.log(this.reservationForm.value);
    } else {
      this.showErrors = true;
    }
  }

  private createForm(): void {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, CustomValidators.telephoneNumber]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public checkForError(formControl: AbstractControl): boolean {
    return formControl.touched && formControl.value === '' || this.showErrors && !formControl.valid;
  }
}
