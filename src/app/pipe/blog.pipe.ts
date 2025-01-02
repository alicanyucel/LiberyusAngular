import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blog'
})
export class BlogPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
