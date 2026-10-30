import type { ImageMetadata } from "astro";

export type CaseDetailBlock = {
  heading: string;
  text: string;
  aside: string;
  image?: ImageMetadata;
};

export type CasePipelineStep = {
  eyebrow: string;
  title: string;
  text: string;
  details?: string[];
  branches?: Array<{ title: string; text: string }>;
};

export type CaseDetailMeta = {
  label: string;
  value: string;
};

export type CaseDetail = {
  summary: string;
  meta: CaseDetailMeta[];
  blocks: CaseDetailBlock[];
  pipeline?: CasePipelineStep[];
};

export type PortfolioCase = {
  slug: string;
  year: string;
  title: string;
  description: string;
  category: string;
  repositoryUrl?: string;
  videoUrl?: string;
  coverImage?: ImageMetadata;
  detail: CaseDetail;
};

const defaultDetail = (label: string): CaseDetail => ({
  summary: `Escreva aqui um resumo do ${label}. Explique o contexto, o desafio e o impacto final.`,
  meta: [
    { label: "Papel", value: "Seu papel no projeto" },
    { label: "Stack", value: "Ferramentas e tecnologias usadas" },
    { label: "Duração", value: "Período ou tempo de execução" },
  ],
  blocks: [
    {
      heading: "Contexto",
      text: "Descreva o cenário, o cliente e o problema que precisava ser resolvido.",
      aside: "Nota lateral sobre o contexto, restrições ou objetivo principal do case.",
    },
    {
      heading: "Processo",
      text: "Explique sua abordagem, decisões importantes e como o trabalho foi conduzido.",
      aside: "Detalhe uma decisão, método ou aprendizado relevante durante o processo.",
    },
    {
      heading: "Resultado",
      text: "Compartilhe os resultados, aprendizados e o que esse case representa no seu portfólio.",
      aside: "Métrica, feedback ou impacto final que você queira destacar.",
    },
  ],
});

export const workItems: PortfolioCase[] = [
  {
    slug: "trabalho-1",
    year: "Ano — Ano",
    title: "Nome da empresa ou cliente",
    description:
      "Descreva aqui a experiência, seu papel e principais contribuições no projeto.",
    category: "Tipo de trabalho",
    detail: defaultDetail("trabalho"),
  },
  {
    slug: "trabalho-2",
    year: "Ano — Ano",
    title: "Nome da empresa ou cliente",
    description:
      "Descreva aqui a experiência, seu papel e principais contribuições no projeto.",
    category: "Tipo de trabalho",
    detail: defaultDetail("trabalho"),
  },

];

export const projectItems: PortfolioCase[] = [
  {
    slug: "othello-minimax",
    year: "TI326",
    title: "Othello com Minimax e poda Alfa-Beta",
    description:
      "Agente em Python para jogar Othello, usando busca Minimax e poda Alfa-Beta para escolher jogadas contra outra IA.",
    category: "Inteligência Artificial · Jogos",
    repositoryUrl: "https://github.com/cc24139/TrabalhosIA/tree/main/ti326m-trabalho1-equipe3-master/ti326m-trabalho1-equipe3-master",
    videoUrl: "/GENIA/20261029-0054-27.8724262.mp4",
    detail: {
      summary:
        "Trabalho da disciplina TI326 que modela o jogo Othello e implementa um agente capaz de disputar partidas contra outra inteligência artificial.",
      meta: [
        { label: "Papel", value: "Desenvolvimento em equipe · Luis Filipe Lima (24139)" },
        { label: "Equipe", value: "Daniel Henrique da Silva Soares (24123) · Júlio Pacheco Stein (24137)" },
        { label: "Tecnologias", value: "Python · Minimax · poda Alfa-Beta" },
      ],
      blocks: [
        {
          heading: "O desafio",
          text: "Representar o tabuleiro 8×8, validar movimentos, aplicar as regras de captura e reconhecer o fim da partida em um jogo estratégico para dois jogadores.",
          aside: "O agente precisa considerar as respostas do adversário antes de escolher uma jogada.",
        },
        {
          heading: "Busca adversarial",
          text: "A busca Minimax explora possíveis sequências de jogadas e avalia estados do tabuleiro. A poda Alfa-Beta reduz os ramos que não podem alterar a decisão, tornando a busca mais eficiente.",
          aside: "A lógica do jogo e a busca são organizadas em módulos Python.",
        },
        {
          heading: "Entrega",
          text: "O projeto reúne o agente jogável, a implementação das regras do Othello e um relatório com a modelagem, os algoritmos e a análise do trabalho.",
          aside: "Código e documentação disponíveis no GitHub.",
        },
      ],
    },
  },
  {
    slug: "caixeiro-viajante-coleta-entrega",
    year: "TI326",
    title: "Caixeiro-viajante com coleta e entrega",
    description:
      "Caminho de busca com meta-heurísticas: aplicação de ILS e BRKGA para encontrar rotas que respeitem precedências de coleta e entrega.",
    category: "Inteligência Artificial · Otimização",
    repositoryUrl: "https://github.com/cc24139/TrabalhosIA/tree/main/ti326m-trabalho2-equipe-11-master/ti326m-trabalho2-equipe-11-master",
    detail: {
      summary:
        "Trabalho da disciplina TI326 que implementa e compara duas meta-heurísticas para o problema do caixeiro-viajante com coleta e entrega.",
      meta: [
        { label: "Papel", value: "Desenvolvimento em equipe · Luis Filipe Lima (24139)" },
        { label: "Equipe", value: "Rafael Brasil Ulbrich (24148) · Rafael Fazion Baldin Dias (24150)" },
        { label: "Tecnologias", value: "Python · Iterated Local Search (ILS) · BRKGA" },
      ],
      blocks: [
        {
          heading: "O desafio",
          text: "Encontrar rotas curtas que visitem as cidades e respeitem a restrição de que cada item seja coletado antes de ser entregue no destino correspondente.",
          aside: "O custo da rota considera as distâncias entre cidades e as precedências de coleta e entrega.",
        },
        {
          heading: "Duas meta-heurísticas",
          text: "O projeto implementa Iterated Local Search (ILS), que alterna busca local e perturbações, e Biased Random-Key Genetic Algorithm (BRKGA), uma abordagem evolutiva baseada em chaves aleatórias.",
          aside: "As soluções são avaliadas em instâncias do problema com diferentes tamanhos.",
        },
        {
          heading: "Análise e entrega",
          text: "O trabalho inclui a implementação do problema e dos algoritmos, execução em instâncias de teste e análise comparativa dos resultados documentada em relatório.",
          aside: "Código, instâncias e relatório estão disponíveis no GitHub.",
        },
      ],
    },
  },
  {
    slug: "Water-Path",
    year: "2026 · TCC",
    title: "Water-Path: Predição de metais pesados por Ensemble Learning",
    description:
      "Sistema de análise de coletas de água que combina imagens do corpo hídrico, detecções visuais e estimativas de concentração de oito metais para apoiar a triagem ambiental.",
    category: "IA aplicada · Visão computacional · Regressão",
    repositoryUrl: "https://github.com/cc24139/WaterPath_TCC",
    detail: {
      summary:
        "TCC que integra uma foto e medições físico-químicas de uma coleta. O serviço de IA detecta elementos visuais na imagem e estima concentrações de oito metais; a API reúne esses dados, aplica uma regra de triagem de risco e registra a análise.",
      meta: [
        { label: "Papel", value: "Desenvolvimento em equipe · Luis Filipe Lima (24139)" },
        { label: "Equipe", value: "Daniel Henrique da Silva Soares (24123) " },
        { label: "Tecnologias", value: "Python · FastAPI · YOLO ONNX · scikit-learn · XGBoost · CatBoost" },
      ],
      blocks: [
        {
          heading: "O desafio",
          text: "A qualidade de um corpo hídrico é acompanhada a partir de coletas com medidas de laboratório e observações visuais. O WaterPath organiza essas evidências por coleta para apoiar a análise e priorizar o acompanhamento de rios e lagos.",
          aside: "A imagem e os parâmetros físico-químicos alimentam etapas distintas de inferência antes de serem reunidos pela API.",
        },
        {
          heading: "FastAPI servindo os modelos",
          text: "O serviço Python em FastAPI expõe POST /analyze. A API principal envia a imagem e os dados da coleta; o serviço coordena a inferência visual e a estimativa dos metais e devolve as detecções, a imagem anotada e as previsões estruturadas.",
          aside: "Separar inferência em serviço próprio deixa o contrato entre API e modelos explícito e permite validar essa integração com testes compartilhados.",
        },
        {
          heading: "Melhora com ensemble learning",
          text: "Para estimar os oito metais, o ensemble combina Random Forest, XGBoost e CatBoost, com RidgeCV reunindo as previsões. Na avaliação documentada, o erro normalizado caiu de 0.138177 com Random Forest para 0.130471 com o ensemble — redução de 5,58% no mesmo conjunto de teste.",
          aside: "É uma melhora medida nessa comparação experimental; não representa validação independente nem impacto ambiental medido em campo.",
        },
      ],
      pipeline: [
        {
          eyebrow: "01 · Entrada",
          title: "Coleta",
          text: "Uma amostra reúne evidências visuais e medições da água.",
          details: [
            "Foto do corpo hídrico",
            "Temperatura, pH, condutividade e oxigênio dissolvido",
            "Sólidos suspensos, carbono orgânico e fósforo opcionais",
          ],
        },
        {
          eyebrow: "02 · Inferência",
          title: "Serviço FastAPI",
          text: "POST /analyze recebe a imagem e os dados e coordena os dois caminhos de inferência.",
          branches: [
            {
              title: "Imagem · YOLO ONNX",
              text: "Detecta elementos visuais e pode devolver a imagem anotada.",
            },
            {
              title: "Medições · Ensemble",
              text: "MultiOutputRegressor estima oito metais; cada saída combina Random Forest, XGBoost e CatBoost com RidgeCV.",
            },
          ],
        },
        {
          eyebrow: "03 · Triagem",
          title: "Regra de risco na IA",
          text: "O serviço FastAPI classifica o risco de 1 a 3 por regra de negócio; não é uma saída do modelo ML. O histórico das cinco coletas anteriores pode elevar o nível em um quando há pelo menos três alertas.",
        },
        {
          eyebrow: "04 · Registro",
          title: "API principal",
          text: "A API .NET valida a resposta do serviço de IA e salva os resultados associados à coleta, disponíveis para apoiar o acompanhamento do corpo hídrico.",
        },
      ],
    },
  }
];

export function getWorkItem(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function getProjectItem(slug: string) {
  return projectItems.find((item) => item.slug === slug);
}

