import { themes, ThemeTokens } from './theme'
import { ArchNode, ArchEdge, ProjectMetric } from './projects'

export interface Experience {
  slug: string
  company: string
  companyShort: string
  role: string
  timeframe: string
  location: string
  hook: string
  description: string[]
  metrics: ProjectMetric[]
  stack: string[]
  highlights: string[]
  architecture: {
    nodes: ArchNode[]
    edges: ArchEdge[]
    description: string
  }
  lessons: string[]
  links: Array<{ label: string; url: string; type: 'website' | 'other' }>
  theme: ThemeTokens
  order: number
  related: string[]
  colorClass: string
}

export const experiences: Experience[] = [
  // ─── Systematic Ventures ──────────────────────────────────────────────────
  {
    slug: 'systematic-ventures',
    company: 'Systematic Ventures',
    companyShort: 'Systematic',
    role: 'Artificial Intelligence Engineer Intern',
    timeframe: 'Jul 2025 – Aug 2025',
    location: 'New York, USA',
    hook: 'Built production AI modules and a financial intelligence SaaS that accelerated investment decisions by ~30% using GPT-4o, RAG, and MongoDB vector search across 370K+ companies.',
    description: [
      'Accelerated investment decisions by ~30% by building a financial intelligence SaaS using GPT-based reasoning, MongoDB joins, and vector semantic search across 370K+ companies and 850K+ funding rounds.',
      'Developed production AI modules (GPT-4o + RAG) with context-aware query flows and optimized semantic + metadata retrieval, merged into the company\'s core backend.',
    ],
    metrics: [
      {
        label: 'Companies Indexed',
        value: '370K+',
        numericValue: 370000,
        suffix: '+',
        icon: '🏢',
      },
      {
        label: 'Funding Rounds',
        value: '850K+',
        numericValue: 850000,
        suffix: '+',
        icon: '💰',
      },
      {
        label: 'Decision Speed',
        value: '~30%',
        numericValue: 30,
        suffix: '%',
        prefix: '~',
        icon: '⚡',
      },
    ],
    stack: [
      'Python',
      'GPT-4o',
      'RAG',
      'MongoDB',
      'Vector Search',
      'FastAPI',
      'LangChain',
      'OpenAI API',
    ],
    highlights: [
      'Designed and shipped a financial intelligence SaaS platform serving production queries against 370K+ company profiles and 850K+ funding rounds',
      'Implemented GPT-4o with Retrieval-Augmented Generation (RAG) for context-aware query understanding across heterogeneous financial data',
      'Built MongoDB vector search pipelines with combined semantic + structured metadata retrieval for high-precision company matching',
      'Optimized query flows to achieve ~30% improvement in investment decision speed through intelligent data pre-fetching',
      'Code merged directly into the company\'s core backend — production-grade quality standard',
      'Worked in a fast-paced startup environment, shipping features end-to-end from design to deployment',
    ],
    architecture: {
      description:
        'RAG-powered financial intelligence pipeline with MongoDB vector search over 1.2M+ financial records.',
      nodes: [
        {
          id: 'query',
          label: 'User Query',
          sublabel: 'Investment Research',
          x: 50,
          y: 140,
          type: 'client',
        },
        {
          id: 'gpt',
          label: 'GPT-4o',
          sublabel: 'Query Understanding',
          x: 190,
          y: 80,
          type: 'external',
        },
        {
          id: 'rag',
          label: 'RAG Module',
          sublabel: 'Context Retrieval',
          x: 330,
          y: 80,
          type: 'service',
        },
        {
          id: 'vector',
          label: 'Vector Search',
          sublabel: 'MongoDB Atlas',
          x: 470,
          y: 60,
          type: 'db',
        },
        {
          id: 'companies',
          label: '370K+ Companies',
          sublabel: 'Company DB',
          x: 570,
          y: 120,
          type: 'db',
        },
        {
          id: 'rounds',
          label: '850K+ Rounds',
          sublabel: 'Funding DB',
          x: 570,
          y: 200,
          type: 'db',
        },
        {
          id: 'metadata',
          label: 'Metadata Filter',
          sublabel: 'Structured Query',
          x: 470,
          y: 200,
          type: 'service',
        },
        {
          id: 'response',
          label: 'Intelligence Report',
          sublabel: 'Actionable Insights',
          x: 190,
          y: 220,
          type: 'service',
        },
      ],
      edges: [
        { from: 'query', to: 'gpt', label: 'understand' },
        { from: 'gpt', to: 'rag', label: 'structured intent' },
        { from: 'rag', to: 'vector', label: 'semantic search' },
        { from: 'vector', to: 'companies', bidirectional: true },
        { from: 'vector', to: 'rounds', bidirectional: true },
        { from: 'rag', to: 'metadata', label: 'filter query' },
        { from: 'metadata', to: 'companies', bidirectional: true },
        { from: 'rag', to: 'response', label: 'enriched context' },
        { from: 'gpt', to: 'response', label: 'generate' },
      ],
    },
    lessons: [
      'Production RAG systems require careful chunking, embedding strategy, and retrieval tuning — naive approaches degrade quality significantly',
      'MongoDB vector search with combined semantic + metadata filtering is powerful but requires index planning upfront',
      'Startup codebases reward speed and pragmatism — but production AI modules need the same rigor as core infrastructure',
      'Prompt engineering for financial queries needs domain-specific few-shot examples to avoid hallucinated company data',
    ],
    links: [{ label: 'Systematic Ventures', url: 'https://systematicventures.com', type: 'website' }],
    theme: themes.financial,
    order: 1,
    related: ['stonklytics', 'neuro-symbolic-ai'],
    colorClass: 'amber',
  },

  // ─── Samsung R&D ──────────────────────────────────────────────────────────
  {
    slug: 'samsung-rnd',
    company: 'Samsung R&D Institute',
    companyShort: 'Samsung R&D',
    role: 'Machine Learning Engineer Intern',
    timeframe: 'May 2023 – Nov 2023',
    location: 'Remote, India',
    hook: 'Built an ML-based Auto Security Vulnerability Detection Framework that enhanced XSS and SQL Injection detection accuracy by 40% across 15+ Samsung and partner web platforms.',
    description: [
      'Developed an ML-based Auto Security Vulnerability Detection Framework that fortified cloud service security for production environments, enhancing XSS and SQL Injection detection accuracy by 40% and reducing manual review time.',
      'Automated CI/CD pipelines and Kubernetes-based deployments testing pipelines across 15+ Samsung and partner web platforms, including SmartThings API, improving vulnerability detection speed and mitigation efficiency.',
    ],
    metrics: [
      {
        label: 'Detection Accuracy Improvement',
        value: '+40%',
        numericValue: 40,
        prefix: '+',
        suffix: '%',
        icon: '🎯',
      },
      {
        label: 'Web Platforms Secured',
        value: '15+',
        numericValue: 15,
        suffix: '+',
        icon: '🛡️',
      },
      {
        label: 'Manual Review Time',
        value: 'Reduced',
        icon: '⏱️',
      },
    ],
    stack: [
      'Python',
      'scikit-learn',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'SmartThings API',
      'Jenkins',
      'Security Testing',
    ],
    highlights: [
      'Designed and implemented ML classification models for automated XSS and SQL Injection vulnerability detection',
      'Achieved 40% improvement in detection accuracy over rule-based baselines using feature engineering on HTTP request/response patterns',
      'Automated security testing across 15+ Samsung and partner web platforms via CI/CD pipeline integration',
      'Kubernetes-based deployment pipeline enabling continuous vulnerability scanning in production environments',
      'Directly contributed to cloud security workflows for SmartThings API and other core Samsung platforms',
      'Reduced manual security review time while improving coverage and detection consistency',
    ],
    architecture: {
      description:
        'Automated ML security pipeline with CI/CD integration for continuous vulnerability detection across Samsung\'s platform fleet.',
      nodes: [
        {
          id: 'platforms',
          label: '15+ Web Platforms',
          sublabel: 'SmartThings + Partners',
          x: 50,
          y: 140,
          type: 'client',
        },
        {
          id: 'scanner',
          label: 'ML Scanner',
          sublabel: 'HTTP Analyzer',
          x: 200,
          y: 140,
          type: 'ml',
        },
        {
          id: 'xss',
          label: 'XSS Detector',
          sublabel: 'ML Classifier',
          x: 340,
          y: 70,
          type: 'ml',
        },
        {
          id: 'sqli',
          label: 'SQLi Detector',
          sublabel: 'ML Classifier',
          x: 340,
          y: 210,
          type: 'ml',
        },
        {
          id: 'cicd',
          label: 'CI/CD Pipeline',
          sublabel: 'Jenkins',
          x: 470,
          y: 140,
          type: 'service',
        },
        {
          id: 'k8s',
          label: 'Kubernetes',
          sublabel: 'Orchestration',
          x: 570,
          y: 140,
          type: 'hardware',
        },
      ],
      edges: [
        { from: 'platforms', to: 'scanner', label: 'HTTP traffic' },
        { from: 'scanner', to: 'xss', label: 'classify' },
        { from: 'scanner', to: 'sqli', label: 'classify' },
        { from: 'xss', to: 'cicd', label: 'findings' },
        { from: 'sqli', to: 'cicd', label: 'findings' },
        { from: 'cicd', to: 'k8s', label: 'deploy' },
        { from: 'k8s', to: 'platforms', label: 'patch & monitor' },
      ],
    },
    lessons: [
      'ML-based vulnerability detection requires careful feature engineering on HTTP request structure — raw text TF-IDF doesn\'t capture injection patterns well',
      'CI/CD integration for security scanning needs fail-open vs fail-closed policies carefully considered',
      'Working across 15+ platforms required building a normalization layer for different API response schemas',
      'Kubernetes deployments in security contexts require strict RBAC and network policy configuration',
    ],
    links: [
      { label: 'Samsung R&D', url: 'https://research.samsung.com/sri-b', type: 'website' },
    ],
    theme: themes.security,
    order: 2,
    related: ['greenlens', 'neuro-symbolic-ai'],
    colorClass: 'cyan',
  },
]

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug)
}
