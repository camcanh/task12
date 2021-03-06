import { Injectable, Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the Thumbnail pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'thumbnail'
})
@Injectable()
export class ThumbnailPipe implements PipeTransform {
  
  transform(value: string, size?: string ): any {
    value = value.substring(0,value.lastIndexOf('.'));
    if (size === 'large') {
      return value + '-tn640.png';
    }
    else if (size === 'medium') {
      return value + '-tn320.png';
    }
    else {
      return value + '-tn160.png'
    }
  }

}