import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly baseProjects: Project[] = [
    {
      id: 1,
      image: '/botcover.webp',
      title: 'Albion Event Bot',
      description:
        'Bot para gerenciamento de eventos no Albion Online, presente em mais de 180 servidores do Discord.',
      link: '#',
    },
    {
      id: 2,
      image: '/sitecover.webp',
      title: 'Albion Event Bot - SITE',
      description: 'Website desenvolvido para apresentar o Albion Event Bot.',
      link: '#',
    },
    {
      id: 3,
      image: '/finacontrolcover.webp',
      title: 'FinaControl',
      description:
        'Aplicativo para gerenciamento de finanças pessoais, focado em organização, controle de gastos e visão clara da vida financeira.',
      link: '#',
    },
  ];

  projects: Project[] = [
    ...this.baseProjects.map((p) => ({ ...p })),
    ...this.baseProjects.map((p) => ({ ...p })),
    ...this.baseProjects.map((p) => ({ ...p })),
  ];

  currentIndex = this.baseProjects.length;

  get transformStyle() {
    return `translateX(calc(50% - 150px - (${this.currentIndex} * 332px)))`;
  }

  next() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  setIndex(index: number) {
    this.currentIndex = index;
  }
}
