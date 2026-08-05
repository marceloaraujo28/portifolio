import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  images: string[];
  techStack: { name: string; icon: string }[];
  buttonName: string;
  buttonImg: string;
  githubLink: string;
  websiteLink?: string;
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
      title: 'Placar Final',
      description: `Desenvolvi o Placar Final, uma plataforma de acompanhamento de futebol composta por site, aplicativo mobile e API própria. O front-end web foi construído com Astro e renderização no servidor (SSR), enquanto o aplicativo foi desenvolvido em React Native com Expo, Expo Router e TypeScript.

      A API foi criada em Node.js, TypeScript e Fastify, atuando como uma camada intermediária entre os clientes e a API de dados esportivos. Essa arquitetura centraliza regras de negócio, protege as chaves externas e otimiza as consultas com cache em Redis. Dados como favoritos, instalações do aplicativo, preferências de notificações e conteúdos do blog são armazenados em PostgreSQL com Prisma ORM.

      Para as notificações em tempo real, implementei um serviço worker separado da API principal. Ele monitora partidas relacionadas aos times e campeonatos seguidos pelos usuários, compara o estado atual de cada jogo com snapshots salvos e identifica eventos relevantes, como início de partida, gols e encerramento.

      Os eventos são adicionados a filas BullMQ persistidas no Redis e processados com concorrência controlada pelo Expo Push Service. A solução inclui tentativas automáticas, backoff exponencial e deduplicação por evento para evitar notificações repetidas. O monitoramento usa frequência adaptativa: a cada minuto para jogos ao vivo ou próximos do início e intervalos maiores quando não há partidas relevantes.

      O back-end foi conteinerizado com Docker e publicado em uma VPS. O Coolify simplifica o deploy, o gerenciamento das variáveis de ambiente e a operação dos serviços.`,
      images: [
        '/placar (1).webp',
        '/placar (2).webp',
        '/placar (3).webp',
        '/placar (4).webp',
        '/placar (5).webp',
        '/placarsite.png',
      ],
      techStack: [
        { name: 'React Native', icon: 'https://cdn.simpleicons.org/react' },
        { name: 'Expo', icon: 'https://cdn.simpleicons.org/expo' },
        { name: 'Expo Router', icon: 'https://cdn.simpleicons.org/expo' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
        { name: 'Astro', icon: 'https://cdn.simpleicons.org/astro' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
        { name: 'Fastify', icon: 'https://cdn.simpleicons.org/fastify' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
        { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma' },
        { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis' },
        { name: 'BullMQ', icon: 'https://cdn.simpleicons.org/bullmq' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
      ],
      githubLink:
        'https://play.google.com/store/apps/details?id=com.marceloaraujo28.placarapp&hl=pt_BR',
      buttonName: 'Ver na Play Store',
      buttonImg: 'https://cdn.simpleicons.org/googleplay',
      websiteLink: 'https://placarfinal.com/',
    },
    {
      id: '2',
      title: 'SalmosOn',
      description: `O SalmosOn é um aplicativo mobile desenvolvido para proporcionar uma experiência simples e acolhedora de leitura e acompanhamento de salmos.

      O projeto foi construído com React Native, permitindo uma interface mobile fluida e uma experiência consistente para usuários Android. O foco do desenvolvimento esteve na organização do conteúdo, na facilidade de navegação e em uma apresentação visual pensada para a leitura diária.`,
      images: [
        '/salmos (1).webp',
        '/salmos (2).webp',
        '/salmos (3).webp',
        '/salmos (4).webp',
        '/salmos (5).webp',
        '/salmos (6).webp',
        '/salmos (7).webp',
        '/salmos (8).webp',
        '/salmos (9).webp',
        '/salmos (10).webp',
      ],
      techStack: [
        { name: 'React Native', icon: 'https://cdn.simpleicons.org/react' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
      ],
      githubLink: 'https://play.google.com/store/apps/details?id=salmoson.app&hl=pt_BR',
      buttonName: 'Ver na Play Store',
      buttonImg: 'https://cdn.simpleicons.org/googleplay',
      websiteLink: 'https://salmoson.com.br/',
    },
    {
      id: '3',
      title: 'Albion Event Bot',
      description: `O Albion Event Bot é um bot para Discord desenvolvido para auxiliar guildas e jogadores do Albion Online na organização de eventos e no gerenciamento de recompensas. Trata-se de um produto em produção, utilizado por mais de 200 servidores, com foco em automação, precisão e escalabilidade.

      🎯 Objetivo do Projeto
      O objetivo do Albion Event Bot é simplificar a criação e o gerenciamento de eventos no Albion Online, especialmente em atividades que envolvem divisão de loot, controle de participação e organização financeira, reduzindo processos manuais e evitando erros.

      💡 Problema Resolvido
      A divisão manual de loot e o controle de participação em eventos frequentemente geram inconsistências e conflitos. O Albion Event Bot resolve esse problema ao registrar automaticamente participantes, tempo de atividade e valores, garantindo uma divisão justa, transparente e confiável das recompensas.

      🚀 Principais Funcionalidades
      • Criação e gerenciamento de eventos diretamente pelo Discord  
      • Controle de participantes e tempo de participação nos eventos  
      • Sistema de split loot para divisão proporcional das recompensas  
      • Gerenciamento de saldos individuais dos jogadores  
      • Consulta de preços de itens através do sistema de Market Price  
      • Suporte a múltiplos idiomas, incluindo Português (PT-BR) e Inglês (EN)  

      🌍 Internacionalização (i18n)
      O bot possui suporte a múltiplos idiomas, permitindo que cada servidor escolha a língua de preferência. Essa funcionalidade facilita a adoção do bot por comunidades internacionais e prepara o produto para expansão global.

      🛠️ Tecnologias Utilizadas
      O projeto foi desenvolvido utilizando TypeScript, garantindo maior segurança, tipagem forte e previsibilidade do código. O Supabase é utilizado como banco de dados e backend, sendo responsável pela persistência dos dados, gerenciamento das informações dos eventos, participantes e saldos.`,
      images: [
        '/bot1.png',
        '/bot2.png',
        '/bot3.png',
        '/bot4.png',
        '/bot5.png',
        '/bot6.png',
        '/bot7.png',
        '/bot8.png',
      ],
      techStack: [
        { name: 'Typescript', icon: 'https://cdn.simpleicons.org/typescript' },
        { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
      ],

      githubLink: 'https://discord.gg/AjGZbc5b2s',
      buttonName: 'Acessar o Bot',
      buttonImg: 'https://cdn.simpleicons.org/discord',
    },
    {
      id: '4',
      title: 'Albion Event Bot - SITE',
      description: `O site do Albion Event Bot foi desenvolvido como a plataforma oficial de apresentação e suporte do bot para Discord, com foco em clareza, usabilidade e boa experiência do usuário. Ele centraliza todas as informações necessárias para que novos usuários entendam rapidamente o funcionamento do bot e consigam utilizá-lo sem dificuldades. O site também possui internacionalização de acordo com o idioma do navegador do usuário.

      🎯 Objetivo do Projeto
      Disponibilizar um site claro e organizado para apresentar o Albion Event Bot, oferecendo documentação completa e acessível, facilitando a adoção do bot por novos servidores e usuários.

      📖 Documentação Completa
      O site conta com uma documentação detalhada que ensina passo a passo como configurar e utilizar o bot, explicando comandos, funcionalidades e fluxos de uso de forma objetiva e didática.

      🎨 Design Responsivo
      A interface foi projetada para funcionar perfeitamente em diferentes tamanhos de tela, garantindo uma experiência consistente tanto em desktop quanto em dispositivos móveis, com foco em legibilidade e navegação simples.

      🛠️ Tecnologias Utilizadas
      O projeto foi desenvolvido utilizando Angular com TypeScript, adotando uma estrutura simples e eficiente, sem dependência de frameworks adicionais, priorizando performance, organização do código e facilidade de manutenção.

      🔗 Link do Projeto
      <a href="https://albioneventbot.vercel.app/" target="_blank" class="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
      https://albioneventbot.vercel.app/
      </a>`,
      images: ['/sitebot1.png', '/sitebot2.png', '/sitebot3.png', '/sitebot4.png'],
      techStack: [
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
      ],
      githubLink: 'https://github.com/marceloaraujo28/bot-site',
      buttonName: 'Ver no GitHub',
      buttonImg: 'https://cdn.simpleicons.org/github',
    },
    {
      id: '5',
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
        { name: 'React Native', icon: 'https://cdn.simpleicons.org/react' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
        { name: 'Expo', icon: 'https://cdn.simpleicons.org/expo' },
        { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase' },
      ],
      githubLink: 'https://github.com/marceloaraujo28/finance-app',
      buttonName: 'Ver no GitHub',
      buttonImg: 'https://cdn.simpleicons.org/github',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.project = this.projectsData.find((p) => p.id === id);
      this.currentSlide = 0;
    });
  }

  nextSlide() {
    if (this.project) {
      this.currentSlide = (this.currentSlide + 1) % this.project.images.length;
    }
  }

  prevSlide() {
    if (this.project) {
      this.currentSlide =
        (this.currentSlide - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }
}
