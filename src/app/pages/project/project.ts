import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  images: string[];
  techStack: { name: string; icon: string }[];
  githubLink: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project implements OnInit {
  project: ProjectData | undefined;
  currentSlide = 0;

  // Dados mockados
  projectsData: ProjectData[] = [
    {
      id: '1',
      title: 'FinaControl',
      description: `O FinaControl é um aplicativo de gestão de finanças pessoais desenvolvido como projeto pessoal, com foco em simplicidade, clareza e experiência do usuário. A aplicação permite acompanhar despesas, planejar o orçamento mensal e visualizar os gastos de forma prática e intuitiva, tornando o controle financeiro mais acessível no dia a dia.

🎯 Objetivo do Projeto
Criar uma solução moderna para organização financeira pessoal, permitindo que o usuário tenha controle total sobre seus gastos e planejamento mensal, sem depender de planilhas ou ferramentas complexas.

Muitas pessoas enfrentam dificuldades para manter o controle financeiro por falta de ferramentas simples, visuais e fáceis de usar. O FinaControl resolve esse problema ao centralizar despesas, orçamento e metas mensais em uma única plataforma, oferecendo feedback visual imediato e facilitando a tomada de decisões financeiras.

✨ Principais Funcionalidades
• Cadastro e remoção de despesas de forma rápida
• Visualização dos gastos por meio de gráficos dinâmicos
• Planejamento financeiro com definição de metas mensais
• Ajuste automático do orçamento conforme novas despesas
• Interface responsiva e focada em usabilidade

🛠️ Tecnologias Utilizadas
O aplicativo foi desenvolvido com React Native e Expo, garantindo uma base sólida para aplicações mobile multiplataforma. A tipagem com TypeScript aumenta a segurança do código, enquanto o Supabase é responsável pelo backend, autenticação e persistência dos dados em tempo real.

⚙️ Decisões Técnicas
A escolha do Expo permitiu um desenvolvimento mais ágil e focado na experiência do usuário. O Supabase foi adotado para acelerar a implementação do backend, reduzindo a complexidade da infraestrutura. O uso do TypeScript contribuiu para um código mais organizado e manutenível.

📚 Aprendizados
Durante o desenvolvimento do FinaControl, aprofundei meus conhecimentos em gerenciamento de estado, integração entre frontend e backend, construção de interfaces mobile focadas em UX e boas práticas de organização de código.`,

      images: [
        '/imgreadme1.png',
        '/imgreadme2.png',
        '/imgreadme3.png',
        '/imgreadme4.png',
        '/imgreadme5.png',
        '/imgreadme6.png',
        '/imgreadme7.png',
      ],
      techStack: [
        { name: 'React Native', icon: 'https://placehold.co/48x48/indigo/white?text=A' },
        { name: 'TypeScript', icon: 'https://placehold.co/48x48/green/white?text=Node' },
        { name: 'Expo', icon: 'https://placehold.co/48x48/cyan/white?text=TW' },
        { name: "Supabase", icon: "https://placehold.co/48x48/cyan/white?text=SP" }
      ],
      githubLink: 'https://github.com/marceloaraujo28/finance-app'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas estilo Kanban. Permite criar quadros, listas e cartões com drag-and-drop. Inclui recursos de colaboração em tempo real, comentários e anexos. Ideal para equipes ágeis que precisam organizar seu fluxo de trabalho de forma visual e intuitiva.',
      images: [
        'https://placehold.co/800x450/0f172a/white?text=Kanban',
        'https://placehold.co/800x450/1e293b/white?text=Details',
        'https://placehold.co/800x450/334155/white?text=Settings'
      ],
      techStack: [
        { name: 'React', icon: 'https://placehold.co/48x48/blue/white?text=R' },
        { name: 'Firebase', icon: 'https://placehold.co/48x48/orange/white?text=Fire' },
        { name: 'TypeScript', icon: 'https://placehold.co/48x48/blue/white?text=TS' }
      ],
      githubLink: 'https://github.com/marcelo/taskmanager'
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'Este site de portfólio pessoal, criado para demonstrar habilidades e projetos. Design moderno e responsivo, com animações suaves e modo escuro. Construído com Angular e Tailwind CSS para garantir alta performance e fácil manutenção.',
      images: [
        'https://placehold.co/800x450/111827/white?text=Home',
        'https://placehold.co/800x450/1f2937/white?text=About',
        'https://placehold.co/800x450/374151/white?text=Contact'
      ],
      techStack: [
        { name: 'Angular', icon: 'https://placehold.co/48x48/indigo/white?text=A' },
        { name: 'Tailwind', icon: 'https://placehold.co/48x48/cyan/white?text=TW' }
      ],
      githubLink: 'https://github.com/marcelo/portfolio'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.project = this.projectsData.find(p => p.id === id);
      this.currentSlide = 0; // Reset slide on project change
    });
  }

  nextSlide() {
    if (this.project) {
      this.currentSlide = (this.currentSlide + 1) % this.project.images.length;
    }
  }

  prevSlide() {
    if (this.project) {
      this.currentSlide = (this.currentSlide - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }
}
