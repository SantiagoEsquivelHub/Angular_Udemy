import { Pipe, PipeTransform } from "@angular/core";

// santiago | toogleCase = 'SANTIAGO'
// SANTIAGO | toogleCase = 'santiago'

@Pipe({
  name: 'toggleCase'
})
export class ToogleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
