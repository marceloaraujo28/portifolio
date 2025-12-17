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
      image: '/finacontrolcover.webp',
      title: 'FinaControl',
      description: 'Aplicativo para gerenciamento de finanças pessoais, focado em organização, controle de gastos e visão clara da vida financeira.',
      link: '#'
    },
    {
      id: 2,
      image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Projeto+2',
      title: 'Dashboard Financeiro',
      description: 'Painel administrativo para gestão financeira com gráficos interativos.',
      link: '#'
    },
    {
      id: 3,
      image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Projeto+3',
      title: 'Social Media Bot',
      description: 'Automação para redes sociais com agendamento de postagens.',
      link: '#'
    },
    {
      id: 4,
      image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Projeto+4',
      title: 'Landing Page',
      description: 'Página de alta conversão para lançamento de produtos digitais.',
      link: '#'
    }
  ];

  projects: Project[] = [
    ...this.baseProjects.map(p => ({ ...p })),
    ...this.baseProjects.map(p => ({ ...p })),
    ...this.baseProjects.map(p => ({ ...p }))
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
