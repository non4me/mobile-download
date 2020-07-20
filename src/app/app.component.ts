import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { content } from './file';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  file = content;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  downloadDocument(): void {
    const mediaType = 'application/pdf';
    const base64content = `data:${mediaType};base64,${this.file}`;
    const link = this.document.createElement('a');
    link.href = base64content;
    link.download = 'test.pdf';
    link.click();
  }
}
