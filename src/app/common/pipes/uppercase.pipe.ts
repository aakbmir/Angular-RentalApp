import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UppercasePipe implements PipeTransform {
  transform(value: String): any {
    const transformedvalue = value.concat('appended');
    return transformedvalue;
  }
}