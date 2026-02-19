export interface Publication {
  id: string
  title: string
  journal: string
  year: number
  month?: string
  abstract: string
  tags: string[]
  link?: string
  featured: boolean
}

export interface ResearchProject {
  id: string
  title: string
  institution: string
  role: string
  timeframe: string
  description: string
  highlights: string[]
  tags: string[]
}

export interface Leadership {
  id: string
  role: string
  org: string
  timeframe: string
  description: string
  icon: string
}

export const publications: Publication[] = [
  {
    id: 'bert-treatment',
    title: 'Treatment Recommendation Using BERT Personalization',
    journal: 'Journal of Innovation in Web Engineering',
    year: 2024,
    abstract:
      'Developed a personalized treatment recommendation system leveraging BERT-based language models to tailor medical suggestions based on patient history and clinical notes. The system demonstrated improved relevance and precision in treatment matching compared to baseline methods.',
    tags: ['NLP', 'BERT', 'Healthcare AI', 'Personalization', 'Transformers'],
    featured: true,
  },
  {
    id: 'cnn-poisoning',
    title: 'Enhancing Algorithmic Resilience Against Data Poisoning Using CNN',
    journal: 'Risk Assessment and Countermeasures for Cybersecurity',
    year: 2024,
    abstract:
      'Investigated adversarial data poisoning attacks on machine learning models and proposed a CNN-based defense mechanism that significantly improves model robustness. The approach reduces the impact of malicious training data while preserving classification accuracy on clean datasets.',
    tags: ['CNN', 'Adversarial ML', 'Cybersecurity', 'Data Poisoning', 'Robustness'],
    featured: true,
  },
]

export const researchProjects: ResearchProject[] = [
  {
    id: 'neuro-symbolic-nus',
    title: 'Neuro-Symbolic AI for Commonsense Reasoning',
    institution: 'National University of Singapore',
    role: 'Research Collaborator',
    timeframe: '2023',
    description:
      'Conducted research on dimensionality reduction and mathematical modeling for Neuro-Symbolic AI, integrating neural networks with symbolic reasoning to enhance contextual understanding and improve commonsense reasoning accuracy by 35%.',
    highlights: [
      '35% improvement in commonsense reasoning accuracy',
      'Novel integration of neural and symbolic AI components',
      'Dimensionality reduction techniques for high-dimensional reasoning tasks',
      'Generated actionable recommendations addressing limitations of traditional algorithms',
      'Reduced error rates in commonsense reasoning benchmarks',
    ],
    tags: ['Neuro-Symbolic AI', 'PyTorch', 'Symbolic Reasoning', 'NLP', 'Dimensionality Reduction'],
  },
]

export const leadership: Leadership[] = [
  {
    id: 'ta-nyu',
    role: 'Teaching Assistant',
    org: 'NYU Tandon School of Engineering',
    timeframe: 'Sept 2025 – Present',
    description:
      'Supporting software engineering coursework at NYU Tandon, mentoring graduate students, holding office hours, and helping students build production-ready software systems.',
    icon: '👩‍🏫',
  },
  {
    id: 'orientation-leader',
    role: 'Graduate Orientation Leader',
    org: 'New York University',
    timeframe: '2025',
    description:
      'Guided incoming graduate students through the transition into academic and professional life at NYU, organizing orientation events and one-on-one mentorship sessions.',
    icon: '🎓',
  },
  {
    id: 'tech-for-good',
    role: 'Speaker — Tech for Good',
    org: 'New York University',
    timeframe: '2025',
    description:
      'Invited to speak at NYU\'s Tech for Good series, discussing the role of responsible and ethical AI in building technology that benefits society. Explored frameworks for building AI systems with fairness, transparency, and accountability at their core.',
    icon: '🎤',
  },
  {
    id: 'article-writing',
    role: 'Winner — International Article Writing Competition',
    org: 'MMU Press, Malaysia',
    timeframe: 'July 2024',
    description:
      'Won 2nd place at the International Article Writing Competition organized by MMU Press, Malaysia — competing against writers globally with technical and analytical writing.',
    icon: '🏆',
  },
  {
    id: 'academic-award',
    role: 'Academic Winner Award',
    org: 'Department of Computing Technologies, SRMIST',
    timeframe: 'Sept 2020 – May 2024',
    description:
      'Consistently recognized for academic excellence throughout undergraduate studies in Computer Science and Engineering at SRMIST, maintaining a 8.98/10 GPA.',
    icon: '🥇',
  },
]

export const researchInterests: string[] = [
  'Large Language Models & Reasoning',
  'Neuro-Symbolic AI',
  'Edge AI & On-Device ML',
  'AI Safety & Robustness',
  'Natural Language Processing',
  'Retrieval-Augmented Generation',
]
