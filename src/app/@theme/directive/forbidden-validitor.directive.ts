import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appForbiddenName]',
  providers:[{provide:NG_VALIDATORS,useExisting:ForbiddenValiditorDirective,multi:true}]
})
export class ForbiddenValiditorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;
  validate(control: AbstractControl): {[key:string]:any} | null{
    return this.forbiddenName? forbiddenNameValidator(new RegExp(this.forbiddenName,'i'))(control) : null
  }


}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}