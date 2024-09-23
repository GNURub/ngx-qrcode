import { NgTemplateOutlet } from '@angular/common';
import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent, QRLogoDirective, Shape } from '@gnurub/ngx-qrcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QRCodeComponent, QRLogoDirective, FormsModule, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public readonly value = model<string>('Hello, World!');
  public readonly primary = model<string>('#A100FF');
  public readonly secoundary = model<string>('#119CFD');
  public readonly qrBackground = signal<string>(this.primary());
  public readonly logo = signal<string>('logo1.svg');

  public readonly padding = signal<number>(0);
  public readonly eyeGap = signal<number>(0);

  public readonly shape = signal<Shape>('circle');
  public readonly eyeShape = signal<Shape>('circle');

  setBackground(bg: string) {
    this.qrBackground.set(bg);
  }

  setMyLogo(logo?: File) {
    if (logo) {
      this.logo.set(URL.createObjectURL(logo));
    }
  }
}
