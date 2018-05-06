import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {

 static telephoneNumber(control: FormControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value))) {
    return { 'telephoneNumber': true };
    }
    return  null;
  }
}
