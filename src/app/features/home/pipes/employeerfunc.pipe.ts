import { Pipe, PipeTransform } from '@angular/core';
import { EEmployeer, EEmployeerNames } from '../../../types/employeer.type';

@Pipe({
  name: 'employeerfunc',
})
export class EmployeerfuncPipe implements PipeTransform {
  transform(value: EEmployeer): string {
    return EEmployeerNames[value];
  }
}
