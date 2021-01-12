import {Directive, HostBinding, Input} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeUrl} from '@angular/platform-browser';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[sanitizeHtml]'
})
export class SanitizeHtmlDirective {

  @Input() sanitizeHtml: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  @HostBinding('innerHtml')
  get innerHtml(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustHtml(this.sanitizeHtml);
  }

}
