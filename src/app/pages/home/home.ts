import { Component } from '@angular/core';
import { About } from "../../components/about/about"
import { Projects } from "../../components/projects/projects"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [About, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
