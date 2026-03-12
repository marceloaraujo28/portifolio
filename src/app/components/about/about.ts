import { Component } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgxMarqueeComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
