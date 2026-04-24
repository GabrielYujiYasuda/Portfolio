export const GLOBALS = {
  GITHUB_URL: "https://github.com/GabrielYujiYasuda",
  LINKEDIN_URL: "https://www.linkedin.com/in/gabrielyasuda/",
};

export const STYLES = {
  BASE_HORIZONTAL_PADDING: "max-w-5xl",
};

export const HEADER = {
  LOGO: "< GabrielYuji />",
  NAV_ABOUT: "Sobre",
  NAV_SKILLS: "Habilidades",
  NAV_EXPERIENCE: "Experiência",
  NAV_PROJECTS: "Projetos",
  NAV_CONTACT: "Contato",
  CTA_BUTTON: "Trabalhe Comigo",
  LANGUAGE_DROPDOWN: {
    PORTUGUESE: "🇧🇷 Português",
    ENGLISH: "🇺🇸 English",
    WORK_IN_PROGRESS: "Work in Progress",
  },
};

export const INTRODUCTION_SECTION = {
  STACK_TEXT: "DESENVOLVEDOR WEB FULL-STACK",
  TITLE: "Construindo aplicações web de alta performance com React e .NET",
  SUB_TITLE: "Desenvolvedor focado em construção de aplicações performáticas e bem estruturadas",
  WORK_WITH_ME_TEXT: "Trabalhe Comigo",
  VIEW_PROJECTS_TEXT: "Veja meus projetos",
};

export const ABOUT_ME_SECTION = {
  ABOUT_TEXT: "Sobre",
  TITLE: "Desenvolvedor focado em entregar soluções de qualidade.",
  LEFT_PARAGRAPH:
    "Com mais de 3 anos de experiência no desenvolvimento de aplicações web, construí uma base sólida em tecnologias modernas de frontend e backend, atuando principalmente com React e .NET. Tenho experiência prática no desenvolvimento de APIs RESTful, microserviços e integrações, sempre com foco em performance, organização e qualidade de código.",
  RIGHT_PARAGRAPH:
    "No meu dia a dia, participo ativamente de todo o ciclo de desenvolvimento — desde o entendimento dos requisitos até a entrega em produção — trabalhando com boas práticas, testes e melhoria contínua para garantir aplicações confiáveis e escaláveis.",
};

export const SKILLS_SECTION = {
  SKILLS_TEXT: "Habilidades",
  TITLE: "Tecnologias que utilizo",
  SKILL_GROUPS: {
    FRONTEND: {
      TITLE: "Frontend",
      TAGS: ["React", "Android", "TypeScript", "Tailwind CSS", "Styled Components", "Redux"],
    },
    BACKEND: {
      TITLE: "Backend",
      TAGS: [".NET", "REST APIs", "Microservices", "Unit Tests", "SQL", "SQLServer", "Clean Code"],
    },
    TOOLS_INFRA: {
      TITLE: "Ferramentas & Infra",
      TAGS: ["Git", "Docker", "Azure", "CI/CD", "Figma"],
    },
  },
};

export const EXPERIENCE_SECTION = {
  EXPERIENCE_TEXT: "Experiências",
  TITLE: "Onde já contribuí",
  EXPERIENCES: [
    {
      dateRange: "Março 2024 — Presente",
      title: "Desenvolvedor Software",
      company: "dti Digital",
      highlights: [
        "Desenvolvimento full stack com C#, .NET, React, TypeScript e SQL Server",
        "Arquitetura e implementação de microserviços e APIs RESTful para aplicações escaláveis",
        "Integração de gateways de pagamento e sistemas de autenticação",
        "Otimização de performance e refatoração de código para maior eficiência",
        "Implementação de testes unitários para aumento da confiabilidade e redução de bugs",
      ],
    },
    {
      dateRange: "Maio 2023 — Março 2024",
      title: "Desenvolvedor Software - Estagiário",
      company: "Fácil",
      highlights: [
        "Desenvolvimento e manutenção de APIs com ASP.NET e aplicações com .NET MVC",
        "Atuação em sistemas legados utilizando Delphi",
        "Administração e otimização de banco de dados Oracle com PL/SQL",
        "Desenvolvimento de soluções para sistemas ERP no setor de saúde",
      ],
    },
    {
      dateRange: "Maio 2022 — Abril 2023",
      title: "Analista de Sistemas - Estagiário",
      company: "Aliança Energia",
      highlights: [
        "Atuação em QA garantindo qualidade e performance de sistemas",
        "Suporte a sistemas corporativos TOTVS (RM e Fluig)",
        "Gestão de demandas com GLPI e documentação de processos",
        "Participação no levantamento de requisitos com stakeholders",
      ],
    },
  ],
  EXPERIENCE_GROUPS: {},
};

export const PROJECTS_SECTION = {
  PROJECTS_TEXT: "Projetos",
  TITLE: "Trabalhos selecionados",
  LIVE_DEMO_TEXT: "Acessar Demo",
  SOURCE_TEXT: "Source Code",
  PROJECTS: [
    {
      title: "Plataforma SaaS de Gestão de Trabalhadores (Confidencial)",
      description:
        "Plataforma SaaS de larga escala utilizada em toda a América do Norte para gestão de trabalhadores e acompanhamento de requisitos obrigatórios, garantindo conformidade com regulamentações locais. Atuei no desenvolvimento de APIs RESTful e microserviços, integrações críticas e otimização de performance, contribuindo para a confiabilidade e escalabilidade do sistema em produção.",
      imageSrc: "cellphone-app",
      imageAlt: "SaaS web application interface",
      tags: [".NET", "React", "SQL Server", "Microservices", "Azure DevOps"],
      liveUrl: "#",
      sourceUrl: "#",
      isLiveDemoDisabled: true,
      hideSource: true,
    },
    {
      title: "Aplicativo Android Nativo (Confidencial)",
      description:
        "Aplicativo Android nativo utilizado por mais de 700 mil trabalhadores na América do Norte. Atuei na modernização da interface por meio da refatoração de layouts XML para Jetpack Compose, além de contribuir com melhorias de performance, usabilidade e manutenção do código.",
      imageSrc: "web-app",
      imageAlt: "Mobile Android app screenshot",
      tags: ["Android", "Kotlin", "Jetpack Compose", "XML"],
      liveUrl: "#",
      sourceUrl: "#",
      isLiveDemoDisabled: true,
      hideSource: true,
    },
    {
      title: "Orca Sound (Voluntariado)",
      description:
        "Projeto voluntário focado na melhoria de aplicações web voltadas à experiência do usuário. Atuei no desenvolvimento com React, colaborando com a equipe de UX para evoluir a interface, melhorar a usabilidade e entregar uma experiência mais intuitiva e acessível.",
      imageSrc: "orcasounde-photo",
      imageAlt: "Orca Sound web application screenshot",
      tags: ["React", "TypeScript", "UX/UI", "Comunicação em Inglês"],
      liveUrl: "https://www.orcasound.net/",
      sourceUrl: "#",
      hideSource: true,
    },
  ],
};

export const CONTACT_SECTION = {
  CONTACT_TEXT: "Contato",
  TITLE: "Vamos trabalhar juntos.",
  DESCRIPTION:
    "Tem um projeto em mente? Estou disponível para oportunidades CLT, PJ e freelance. Vamos conversar — preencha o formulário ou entre em contato.",
  COMING_SOON_LABEL: "Em breve",
  FORM_TITLE: "Formulário de Contato",
  FORM_MESSAGE:
    "Estou configurando o serviço de e-mail. Enquanto isso, use os métodos de contato abaixo para entrar em contato.",
};

export const AVAILABILITY_SECTION = {
  STATUS_LABEL: "Disponível para oportunidades CLT, PJ e freelance",
  TITLE: "Pronto para o seu próximo projeto.",
  SUBTITLE:
    "Entrego soluções prontas para produção, com qualidade e dentro do prazo. Posso contribuir para acelerar entregas e gerar valor contínuo para o time.",
  CTA_TEXT: "Entre em Contato",
};
