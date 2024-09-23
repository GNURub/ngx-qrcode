import { Directive, input } from '@angular/core';

@Directive({
  selector: '[qrLogo]',
  standalone: true,
  host: {
    style:
      'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);',
  },
})
export class QRLogoDirective {
  public readonly logoAreaSize = input<number, string | number>(40, {
    transform: (value: string | number) => Math.max(0, Number(value)),
  });
}
