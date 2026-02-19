import { themes, ThemeTokens } from './theme'

export interface ProjectMetric {
  label: string
  value: string
  prefix?: string
  suffix?: string
  numericValue?: number
  icon?: string
}

export interface ArchNode {
  id: string
  label: string
  sublabel?: string
  x: number
  y: number
  type: 'client' | 'api' | 'service' | 'db' | 'external' | 'ml' | 'hardware'
}

export interface ArchEdge {
  from: string
  to: string
  label?: string
  bidirectional?: boolean
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  hook: string
  timeframe: string
  location?: string
  role?: string
  category: Array<'ai' | 'fullstack' | 'research' | 'edge' | 'security'>
  badge?: string
  stack: string[]
  metrics: ProjectMetric[]
  problem: string
  solution: string
  highlights: string[]
  architecture: {
    nodes: ArchNode[]
    edges: ArchEdge[]
    description: string
  }
  lessons: string[]
  links: Array<{ label: string; url: string; type: 'github' | 'demo' | 'paper' | 'other' }>
  theme: ThemeTokens
  featured: boolean
  order: number
  related: string[]
  colorClass: string
}

export const projects: Project[] = [
  // ─── Stonklytics ────────────────────────────────────────────────────────────
  {
    slug: 'stonklytics',
    title: 'Stonklytics',
    subtitle: 'AI-Powered Stock Market Research Assistant',
    hook: 'Unified financial intelligence platform consolidating market data, news, and social sentiment into AI-powered stock reports.',
    timeframe: '2025',
    role: 'Full Stack & AI Engineer',
    category: ['ai', 'fullstack'],
    stack: [
      'Python',
      'Django',
      'React',
      'TypeScript',
      'OpenAI API',
      'Grok API',
      'PostgreSQL',
      'JWT Auth',
      'REST API',
    ],
    metrics: [
      {
        label: 'Data Sources Integrated',
        value: '5+',
        numericValue: 5,
        suffix: '+',
        icon: '📊',
      },
      {
        label: 'AI Models in Pipeline',
        value: '2',
        numericValue: 2,
        icon: '🤖',
      },
      {
        label: 'Report Generation',
        value: '<10s',
        icon: '⚡',
      },
    ],
    problem:
      'Retail investors must manually aggregate data from dozens of disparate sources — SEC filings, financial news, Reddit, analyst ratings, and social media — before making any informed decision. This process is time-consuming, error-prone, and inaccessible to most individual investors who lack the tools that institutional traders use.',
    solution:
      'A full-stack Django + React platform that automatically fetches, aggregates, and AI-summarizes all relevant data for any stock ticker. The backend orchestrates calls to financial data APIs, news aggregators, and social sentiment sources, then passes the enriched context to OpenAI (for summarization) and Grok (for real-time sentiment analysis) to generate unified stock intelligence reports.',
    highlights: [
      'Django REST backend with JWT authentication, stock search, and portfolio management endpoints',
      'Dual AI pipeline: OpenAI GPT for comprehensive summarization, Grok API for real-time social sentiment',
      'Aggregates financial statements, analyst ratings, news headlines, and Reddit/Twitter sentiment in one view',
      'Sub-10-second end-to-end report generation with async task processing',
      'React frontend with TypeScript, interactive stock charts, and responsive design',
      'User authentication with saved watchlists and personalized insights',
    ],
    architecture: {
      description:
        'Full-stack event-driven architecture with dual AI pipeline for financial intelligence generation.',
      nodes: [
        { id: 'user', label: 'User', sublabel: 'Browser', x: 50, y: 140, type: 'client' },
        { id: 'frontend', label: 'React', sublabel: 'TypeScript', x: 180, y: 80, type: 'service' },
        { id: 'backend', label: 'Django', sublabel: 'REST API', x: 330, y: 140, type: 'service' },
        { id: 'openai', label: 'OpenAI', sublabel: 'GPT-4o', x: 480, y: 60, type: 'external' },
        { id: 'grok', label: 'Grok API', sublabel: 'Sentiment', x: 480, y: 140, type: 'external' },
        {
          id: 'financial',
          label: 'Financial APIs',
          sublabel: 'Market Data',
          x: 480,
          y: 220,
          type: 'external',
        },
        {
          id: 'db',
          label: 'PostgreSQL',
          sublabel: 'Users & Data',
          x: 330,
          y: 260,
          type: 'db',
        },
      ],
      edges: [
        { from: 'user', to: 'frontend' },
        { from: 'frontend', to: 'backend' },
        { from: 'backend', to: 'openai', label: 'summarize' },
        { from: 'backend', to: 'grok', label: 'sentiment' },
        { from: 'backend', to: 'financial', label: 'market data' },
        { from: 'backend', to: 'db', bidirectional: true },
        { from: 'openai', to: 'backend' },
        { from: 'grok', to: 'backend' },
        { from: 'financial', to: 'backend' },
      ],
    },
    lessons: [
      'Learned to orchestrate multiple external AI APIs with rate limiting and fallback strategies',
      'Async task queues are essential for sub-10s response times when aggregating 5+ data sources',
      'Financial data APIs have wildly different schemas — a normalization layer is non-negotiable',
      'Caching stock data at the right TTL (not too fresh, not too stale) dramatically reduces costs',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/yuktakul04', type: 'github' }],
    theme: themes.market,
    featured: true,
    order: 3,
    related: ['grubsync', 'greenlens'],
    colorClass: 'emerald',
  },

  // ─── GrubSync ──────────────────────────────────────────────────────────────
  {
    slug: 'grubsync',
    title: 'GrubSync',
    subtitle: 'Group-Centric Restaurant Recommendation System',
    hook: 'Real-time event-driven restaurant recommendations that aggregate group preferences and generate consensus picks at low latency.',
    timeframe: '2025',
    role: 'Full Stack Engineer',
    category: ['fullstack', 'ai'],
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Redis Streams',
      'Dask',
      'scikit-learn',
      'JWT',
      'PostgreSQL',
    ],
    metrics: [
      {
        label: 'Recommendation Latency',
        value: '<200ms',
        icon: '⚡',
      },
      {
        label: 'Preference Dimensions',
        value: '10+',
        numericValue: 10,
        suffix: '+',
        icon: '🎯',
      },
      {
        label: 'Processing Model',
        value: 'Real-time',
        icon: '🔄',
      },
    ],
    problem:
      'Deciding where to eat as a group is a notoriously frustrating coordination problem. Existing apps are single-user focused — there\'s no tool that handles real-time group preference aggregation, resolves conflicts between dietary restrictions and cuisine preferences, and surfaces a ranked recommendation that works for everyone simultaneously.',
    solution:
      'An event-driven full-stack system where users create or join group sessions, submit their individual preferences (cuisine, dietary restrictions, price range, distance), and receive real-time recommendations driven by a scikit-learn collaborative filtering pipeline. Redis Streams power the real-time event bus; Dask handles batch preference aggregation; the Node.js/Express backend ties it all together with JWT-secured group workflows.',
    highlights: [
      'Event-driven architecture with Redis Streams for real-time preference aggregation across group members',
      'scikit-learn collaborative filtering model generating group consensus recommendations',
      'Dask-powered batch pipeline for processing and normalizing multi-dimensional preference vectors',
      'React + TypeScript frontend with real-time updates, group session management, and JWT auth',
      'Node.js/Express backend with RESTful API design and preference conflict resolution logic',
      'Sub-200ms recommendation latency even during concurrent group sessions',
    ],
    architecture: {
      description:
        'Event-driven microservice architecture with real-time Redis Streams and ML recommendation engine.',
      nodes: [
        { id: 'user', label: 'Users', sublabel: 'Group Members', x: 50, y: 140, type: 'client' },
        {
          id: 'frontend',
          label: 'React',
          sublabel: 'TypeScript',
          x: 180,
          y: 100,
          type: 'service',
        },
        {
          id: 'api',
          label: 'Node.js',
          sublabel: 'Express API',
          x: 310,
          y: 140,
          type: 'service',
        },
        {
          id: 'redis',
          label: 'Redis Streams',
          sublabel: 'Event Bus',
          x: 450,
          y: 70,
          type: 'service',
        },
        { id: 'dask', label: 'Dask', sublabel: 'Batch Pipeline', x: 450, y: 160, type: 'ml' },
        {
          id: 'sklearn',
          label: 'scikit-learn',
          sublabel: 'Collab Filter',
          x: 450,
          y: 250,
          type: 'ml',
        },
        { id: 'db', label: 'PostgreSQL', sublabel: 'Sessions & Users', x: 310, y: 260, type: 'db' },
      ],
      edges: [
        { from: 'user', to: 'frontend' },
        { from: 'frontend', to: 'api' },
        { from: 'api', to: 'redis', label: 'publish events' },
        { from: 'redis', to: 'dask', label: 'consume' },
        { from: 'dask', to: 'sklearn', label: 'aggregated vectors' },
        { from: 'sklearn', to: 'api', label: 'recommendations' },
        { from: 'api', to: 'db', bidirectional: true },
        { from: 'api', to: 'frontend', label: 'real-time push' },
      ],
    },
    lessons: [
      'Redis Streams + consumer groups are the right tool for real-time preference aggregation — pub/sub was too lossy',
      'Group recommendation is harder than individual: you optimize for the group minimum, not the average',
      'Dask shines for batch preference normalization but adds overhead for small groups — added conditional routing',
      'Building collaborative filtering from scratch revealed how sparse real-world preference matrices are',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/yuktakul04', type: 'github' }],
    theme: themes.social,
    featured: true,
    order: 2,
    related: ['stonklytics', 'greenlens'],
    colorClass: 'orange',
  },

  // ─── GreenLens ─────────────────────────────────────────────────────────────
  {
    slug: 'greenlens',
    title: 'GreenLens',
    subtitle: 'Edge AI Sustainability Assistant',
    hook: 'Offline-first edge AI application enabling real-time grocery sustainability analytics on Qualcomm hardware — Hackathon Finalist.',
    timeframe: '2025',
    role: 'Edge AI Engineer',
    category: ['ai', 'edge'],
    badge: 'Qualcomm Edge AI Developer Hackathon Finalist · NYC',
    stack: [
      'Python',
      'YOLOv8',
      'ONNX Runtime',
      'Qualcomm NPU',
      'Snapdragon X Elite',
      'OpenCV',
      'NumPy',
      'PyTorch',
    ],
    metrics: [
      {
        label: 'Offline Capability',
        value: '100%',
        numericValue: 100,
        suffix: '%',
        icon: '📡',
      },
      {
        label: 'Object Detection Model',
        value: 'YOLOv8',
        icon: '👁️',
      },
      {
        label: 'Hardware Target',
        value: 'Qualcomm NPU',
        icon: '⚡',
      },
    ],
    problem:
      'Consumers have almost no visibility into the environmental footprint of their grocery purchases in the moment of decision. Existing sustainability apps require internet connectivity, are slow, and don\'t work at the point of purchase. There\'s no offline, real-time tool that can classify groceries and estimate their CO₂ impact on constrained hardware.',
    solution:
      'An end-to-end edge AI pipeline deployed on Snapdragon X / X Elite Copilot+ PCs. YOLOv8 runs on-device via ONNX Runtime, accelerated by the Qualcomm NPU, to classify grocery items in real-time without any internet connection. A lightweight regression model then estimates CO₂ emissions per item, and a local analytics dashboard surfaces actionable sustainability insights.',
    highlights: [
      'Offline-first design: entire AI inference pipeline runs locally on Qualcomm NPU hardware',
      'YOLOv8 converted to ONNX format, optimized for NPU execution via Qualcomm\'s runtime',
      'Lightweight CO₂ regression model trained on grocery emissions datasets',
      'End-to-end pipeline: camera capture → object detection → CO₂ estimation → dashboard display',
      'Energy-efficient inference on constrained hardware without cloud dependency',
      'Selected as finalist at Qualcomm Edge AI Developer Hackathon, New York City 2025',
    ],
    architecture: {
      description:
        'On-device edge inference pipeline with Qualcomm NPU acceleration — no cloud, no connectivity required.',
      nodes: [
        {
          id: 'camera',
          label: 'Camera',
          sublabel: 'Live Feed',
          x: 50,
          y: 140,
          type: 'client',
        },
        {
          id: 'yolo',
          label: 'YOLOv8',
          sublabel: 'Object Detection',
          x: 190,
          y: 80,
          type: 'ml',
        },
        {
          id: 'onnx',
          label: 'ONNX Runtime',
          sublabel: 'Optimized Inference',
          x: 330,
          y: 140,
          type: 'hardware',
        },
        {
          id: 'npu',
          label: 'Qualcomm NPU',
          sublabel: 'Hardware Accel',
          x: 330,
          y: 250,
          type: 'hardware',
        },
        {
          id: 'co2',
          label: 'CO₂ Regression',
          sublabel: 'Emissions Model',
          x: 190,
          y: 210,
          type: 'ml',
        },
        {
          id: 'dashboard',
          label: 'Analytics',
          sublabel: 'Sustainability UI',
          x: 480,
          y: 140,
          type: 'service',
        },
      ],
      edges: [
        { from: 'camera', to: 'yolo', label: 'frames' },
        { from: 'yolo', to: 'onnx', label: 'inference' },
        { from: 'onnx', to: 'npu', label: 'accelerate' },
        { from: 'npu', to: 'onnx' },
        { from: 'onnx', to: 'co2', label: 'detections' },
        { from: 'co2', to: 'dashboard', label: 'CO₂ data' },
        { from: 'onnx', to: 'dashboard', label: 'results' },
      ],
    },
    lessons: [
      'ONNX is the right abstraction for cross-hardware deployment — model once, run anywhere',
      'Quantization is mandatory for NPU acceleration: FP16 gave 2x speedup over FP32',
      'Edge AI forces you to think about memory budgets — YOLOv8n vs YOLOv8x is a real tradeoff',
      'Building offline-first makes you appreciate how much modern apps silently depend on connectivity',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/yuktakul04', type: 'github' }],
    theme: themes.edge,
    featured: true,
    order: 1,
    related: ['stonklytics', 'neuro-symbolic-ai'],
    colorClass: 'teal',
  },

  // ─── Neuro-Symbolic AI ──────────────────────────────────────────────────────
  {
    slug: 'neuro-symbolic-ai',
    title: 'Neuro-Symbolic AI',
    subtitle: 'Commonsense Reasoning Research · National University of Singapore',
    hook: 'Research integrating neural networks with symbolic reasoning for 35% improved commonsense understanding at NUS.',
    timeframe: '2023',
    role: 'Research Collaborator',
    category: ['ai', 'research'],
    stack: [
      'Python',
      'PyTorch',
      'Symbolic Reasoning',
      'NLP',
      'Dimensionality Reduction',
      'NumPy',
      'Scikit-learn',
    ],
    metrics: [
      {
        label: 'Accuracy Improvement',
        value: '35%',
        numericValue: 35,
        suffix: '%',
        icon: '📈',
      },
      {
        label: 'Research Institution',
        value: 'NUS',
        icon: '🎓',
      },
      {
        label: 'Error Rate',
        value: 'Reduced',
        icon: '✓',
      },
    ],
    problem:
      'Traditional AI systems are brittle at commonsense reasoning — understanding the implicit world knowledge that humans take for granted (e.g., "if it\'s raining and I don\'t have an umbrella, I\'ll get wet"). Pure neural approaches fail to generalize, while pure symbolic systems can\'t handle ambiguity or learn from data.',
    solution:
      'A hybrid neuro-symbolic architecture that combines neural networks\' strength in pattern recognition and learning from data with symbolic AI\'s ability to apply structured logical reasoning. The research focused on dimensionality reduction techniques to bridge the representation gap between continuous neural embeddings and discrete symbolic knowledge, achieving 35% accuracy improvement over baseline neural-only models.',
    highlights: [
      '35% accuracy improvement over baseline neural-only commonsense reasoning models',
      'Novel dimensionality reduction approach bridging neural embeddings and symbolic knowledge representations',
      'Mathematical modeling framework for integrating symbolic rules into neural inference pipelines',
      'Reduced error rates in standard commonsense reasoning benchmarks',
      'Research conducted at National University of Singapore (NUS) — top-10 globally ranked institution',
      'Contributed actionable recommendations for addressing fundamental limitations in traditional algorithms',
    ],
    architecture: {
      description:
        'Hybrid neuro-symbolic pipeline integrating neural embedding with symbolic knowledge base reasoning.',
      nodes: [
        {
          id: 'input',
          label: 'Natural Language',
          sublabel: 'Text Input',
          x: 50,
          y: 140,
          type: 'client',
        },
        {
          id: 'neural',
          label: 'Neural Encoder',
          sublabel: 'Transformer',
          x: 190,
          y: 80,
          type: 'ml',
        },
        {
          id: 'dimred',
          label: 'Dim. Reduction',
          sublabel: 'Bridge Layer',
          x: 330,
          y: 140,
          type: 'ml',
        },
        {
          id: 'symbolic',
          label: 'Symbolic Reasoner',
          sublabel: 'Logic Engine',
          x: 190,
          y: 220,
          type: 'ml',
        },
        {
          id: 'kb',
          label: 'Knowledge Base',
          sublabel: 'Commonsense KB',
          x: 50,
          y: 260,
          type: 'db',
        },
        {
          id: 'fusion',
          label: 'Fusion Layer',
          sublabel: 'Integration',
          x: 450,
          y: 140,
          type: 'ml',
        },
        {
          id: 'output',
          label: 'Inference',
          sublabel: 'Commonsense Output',
          x: 550,
          y: 140,
          type: 'service',
        },
      ],
      edges: [
        { from: 'input', to: 'neural', label: 'encode' },
        { from: 'input', to: 'symbolic', label: 'parse' },
        { from: 'kb', to: 'symbolic', label: 'query' },
        { from: 'neural', to: 'dimred', label: 'embeddings' },
        { from: 'symbolic', to: 'dimred', label: 'logical facts' },
        { from: 'dimred', to: 'fusion', label: 'bridged repr.' },
        { from: 'fusion', to: 'output', label: 'reasoning' },
      ],
    },
    lessons: [
      'The representation gap between continuous neural embeddings and discrete symbolic facts is the hardest part of neuro-symbolic AI',
      'Dimensionality reduction (PCA, UMAP) can be used as a semantic bridge between modalities',
      'Commonsense benchmarks (CommonsenseQA, WinoGrande) reveal specific failure modes that symbolic rules can directly address',
      'Research at a top institution requires communicating complex ideas clearly to an interdisciplinary audience',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/yuktakul04', type: 'github' }],
    theme: themes.research,
    featured: false,
    order: 4,
    related: ['greenlens', 'stonklytics'],
    colorClass: 'violet',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order)
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return projects.filter((p) => slugs.includes(p.slug))
}
