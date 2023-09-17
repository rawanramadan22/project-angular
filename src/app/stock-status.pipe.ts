import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',
})
export class StockStatusPipe implements PipeTransform {
  transform(stock: number): { status: string; cssClass: string } {
    if (stock === 0) {
      return { status: 'Out of Stock', cssClass: 'out-of-stock' };
    } else {
      return { status: 'In Stock', cssClass: 'in-stock' };
    }
  }
}
