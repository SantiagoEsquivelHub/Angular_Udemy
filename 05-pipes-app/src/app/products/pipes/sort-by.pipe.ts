import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  private lastSortBy: keyof Hero | null = null;
  private lastSortOrder: 'asc' | 'desc' = 'asc';

  transform(heroes: Hero[], sortBy: keyof Hero | null): Hero[] {
    if (sortBy === this.lastSortBy) {
      this.lastSortOrder = this.lastSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.lastSortBy = sortBy;
      this.lastSortOrder = 'asc';
    }

    if (!sortBy) return heroes;

    const compareFn = (a: Hero, b: Hero) => {
      const compareValue = a[sortBy] > b[sortBy] ? 1 : -1;
      return this.lastSortOrder === 'asc' ? compareValue : -compareValue;
    };

    return heroes.slice().sort(compareFn);
  }

}
