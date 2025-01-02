import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comment'
})
export class CommentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
