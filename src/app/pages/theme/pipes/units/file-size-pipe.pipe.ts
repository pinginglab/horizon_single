import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FileSizePipe'
})
export class FileSizePipePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if (value) {
        return this.getReadableFileSizeString(value);
    } else {
      return '';
    }
  }

  getReadableFileSizeString(fileSizeInBytes: number) {
      let i = -1;
      const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
      do {
          fileSizeInBytes = fileSizeInBytes / 1024;
          i++;
      } while (fileSizeInBytes > 1024);

      return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  }

}
