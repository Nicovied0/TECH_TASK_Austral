import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    const restult = value.charAt(0).toUpperCase() + value.slice(1);
    console.log(restult,"soy el valu")
    return restult
  }
}
