# ngx-qrcode 🎨

This is a simple Angular +18 component to generate QR codes.
Based on [react-native-qrcode-skia](https://github.com/enzomanuelmangano/react-native-qrcode-skia) library.

<p align="center">
  <a href="https://gnurub.github.io/ngx-qrcode/" target="_blank" rel="noopener noreferrer">
    <img src="https://raw.githubusercontent.com/GNURub/ngx-qrcode/refs/heads/main/.assets/poster.png" width="950" title="demo">
  </a>
</p>

## Requirements

- Angular 18, 19, 20

## Installation

```sh
npm i -S @gnurub/ngx-qrcode
```

or

```sh
ng add @gnurub/ngx-qrcode
```

## Usage

You might need a very simple QRCode component in your app and you can achieve that by using the basic props (value and size). Here is an example:

```tsx
import { QRCodeComponent } from "@gnurub/ngx-qrcode";

@Component({
  selector: "app-root",
  imports: [QRCodeComponent],
  template: ` <ngx-qrcode [value]="'https://example.com'"></ngx-qrcode> `,
})
export class AppComponent {}
```

With Logo

```tsx
import { QRCodeComponent, QRLogoDirective } from "@gnurub/ngx-qrcode";

@Component({
  selector: "app-root",
  imports: [QRCodeComponent, QRLogoDirective],
  template: ` <ngx-qrcode [value]="'https://example.com'"><svg qrLogo>...</svg> | <img qrLogo /></ngx-qrcode> `,
})
export class AppComponent {}
```

## Props QRCodeComponent

- `value` (string) - The value encoded in the QRCode.

- `errorCorrectionLevel` (ErrorCorrectionLevelType, optional) - The error correction level for the QRCode. Level L: 7%, level M: 15%, level Q: 25%, level H: 30%. Default value is 'H'.

- `strokeWidth` (number, optional) - The percentage of the strokeWidth (0 to 1). Default value is 1.

- `pathStyle` ('fill' | 'stroke', optional) - The style of the QRCode path: 'fill' or 'stroke'. Default value is 'stroke'.

- `padding` (number, optional) - The padding applied around the QRCode. Default value is 0.

- `size` (number) - The size of the QRCode.

- `shape` (Shape, optional) - The shape of the QR code elements. Can be 'square', 'circle', 'rounded', 'diamond', 'triangle', or 'star'. Default is 'rounded'.

- `gap` (number, optional) - The gap between QR code elements. Default is 0.

- `eyeShape` (Shape, optional) - The shape of the eye patterns. Can be 'square', 'circle', 'rounded', 'diamond', 'triangle', or 'star'. Default is 'rounded'.

- `eyeGap` (number, optional) - The gap in the eye patterns. Default is 0.

## Props QRLogoDirective

- `logoAreaSize` (number, optional) - The size of the logo area within the QRCode.

## License

MIT

---
