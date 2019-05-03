import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'HostUptimePipe'
})
export class HostUptimePipePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if (value) {
        if (value < 86400) {
            return (value / 3600).toFixed(1) + ' 小时';
        } else {
            return (value / 86400).toFixed(1) + ' 天';
        }
    } else {
      return '';
    }
  }

}
