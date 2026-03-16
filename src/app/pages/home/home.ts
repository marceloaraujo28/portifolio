import { Component } from '@angular/core';
import { About } from "../../components/about/about"
import { Projects } from "../../components/projects/projects"
import { Experiences } from "../../components/experiences/experiences"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [About, Projects, Experiences],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
