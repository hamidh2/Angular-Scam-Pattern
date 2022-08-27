import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarTitle'
})
export class AvatarTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
