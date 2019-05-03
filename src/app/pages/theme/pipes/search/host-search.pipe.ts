import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'HostSearchPipe', pure: false })
export class HostSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(host => {
          if (host.name) {
          return host.name.search(searchText) !== -1;
        } else {
          return host.name.search(searchText) !== -1;
        }
      });
    }
  }
}
