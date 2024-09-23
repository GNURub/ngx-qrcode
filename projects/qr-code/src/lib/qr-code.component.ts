import { Component, computed, contentChild, input } from '@angular/core';
import { QRCodeErrorCorrectionLevel } from 'qrcode';
import { QRLogoDirective } from './qr-logo.directive';
import { generateMatrix } from './qr/generate-matrix';
import { transformMatrixIntoPath } from './qr/transform-matrix-into-path';

export type Shape =
  | 'square'
  | 'circle'
  | 'rounded'
  | 'diamond'
  | 'triangle'
  | 'star';

export interface ShapeOptions {
  shape?: Shape;
  eyePatternShape?: Shape;
  gap?: number;
  eyePatternGap?: number;
}

@Component({
  selector: 'ngx-qrcode',
  standalone: true,
  host: {
    '[style]': 'containerStyle()',
  },
  template: `
    @let s = size();

    <svg
      [attr.width]="s"
      [attr.height]="s"
      [attr.viewBox]="'0 0 ' + s + ' ' + s"
    >
      <clipPath id="qr">
        <path [attr.d]="path()"></path>
      </clipPath>

      <foreignObject width="100%" height="100%" clip-path="url(#qr)">
        <div id="qr-styles"></div>
      </foreignObject>
    </svg>

    <ng-content select="[qrLogo]"></ng-content>
  `,
  imports: [QRLogoDirective],
  styles: [
    `
      @property --qr-background {
        syntax: '<background-color|color>';
        inherits: false;
        initial-value: #000000;
      }

      #qr-styles {
        width: 100%;
        height: 100%;
        background: var(--qr-background);
      }
    `,
  ],
})
export class QRCodeComponent {
  public readonly errorCorrectionLevel = input<QRCodeErrorCorrectionLevel>('H');
  public readonly eyeGap = input<number>(0);
  public readonly eyeShape = input<Shape>('rounded');
  public readonly gap = input<number>(0);
  public readonly logo = contentChild<QRLogoDirective>(QRLogoDirective);
  public readonly logoAreaSize = input<number>(40);
  public readonly padding = input<number>(0);
  public readonly pathStyle = input<'fill' | 'stroke'>('fill');
  public readonly shape = input<Shape>('rounded');
  public readonly size = input<number>(256);
  public readonly strokeWidth = input<number>(1);
  public readonly value = input.required<string>();

  private readonly shapeOptions = computed(() => ({
    shape: this.shape(),
    eyePatternShape: this.eyeShape(),
    gap: this.gap(),
    eyePatternGap: this.eyeGap(),
  }));

  public readonly path = computed(() => {
    const logo = this.logo();

    const matrix = generateMatrix(this.value(), this.errorCorrectionLevel());
    const { path } = transformMatrixIntoPath(
      matrix,
      this.size(),
      this.shapeOptions(),
      logo?.logoAreaSize() ?? 0,
    );
    return path;
  });

  public readonly containerStyle = computed(() => ({
    width: `${this.size()}px`,
    height: `${this.size()}px`,
    position: 'relative',
    display: 'block',
    padding: `${this.padding()}px`,
  }));
}
