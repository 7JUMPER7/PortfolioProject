import { Pipe, PipeTransform } from "@angular/core";
@Pipe({name: 'linkHeader'})

export class LinkHeaderPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    let a: HTMLAnchorElement = document.createElement('a');
    a.href = value;
    return a.hostname;
  }
}
