import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgxMarqueeComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  isContactModalOpen = false;

  openContactModal() {
    this.isContactModalOpen = true;
  }

  closeContactModal() {
    this.isContactModalOpen = false;
  }
}
