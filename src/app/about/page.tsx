import type { Metadata } from 'next'
import Link from 'next/link'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Yukta Kulkarni — NYU MS CS student, AI engineer, and published researcher passionate about building intelligent systems at scale.',
}

const skillGroups = [
  {
    category: 'Languages',
    icon: '⌨️',
    skills: ['Python', 'TypeScript / JavaScript', 'Java', 'C / C++', 'SQL'],
  },
  {
    category: 'AI / ML',
    icon: '🧠',
    skills: [
      'PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV',
      'Hugging Face Transformers', 'LangChain', 'OpenAI API (GPT-4o)', 'ONNX Runtime',
    ],
  },
  {
    category: 'Backend & Databases',
    icon: '⚙️',
    skills: [
      'FastAPI', 'Django', 'Node.js / Express', 'PostgreSQL',
      'MongoDB', 'Redis', 'RabbitMQ', 'Vector Search',
    ],
  },
  {
    category: 'Infrastructure',
    icon: '☁️',
    skills: [
      'Docker', 'Kubernetes', 'AWS (S3 / EC2)', 'CI/CD Pipelines',
      'Spark', 'Hadoop', 'Microservices',
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  },
  {
    category: 'Tools & Methods',
    icon: '🛠️',
    skills: [
      'Git', 'System Design', 'RESTful APIs', 'Tableau',
      'NLP', 'Data Science', 'Performance Optimization',
    ],
  },
]

const values = [
  {
    icon: '🚀',
    title: 'Ship with depth',
    description:
      'I care about production quality — not just making things work, but making them work reliably, efficiently, and at scale.',
  },
  {
    icon: '🧪',
    title: 'Learn by building',
    description:
      'Every project is an opportunity to go deeper — from financial RAG pipelines to edge AI on Qualcomm hardware, I chase hard problems.',
  },
  {
    icon: '🌍',
    title: 'Impact-first engineering',
    description:
      'Tech for Good isn\'t just a talk I gave — it\'s how I think about what to build. I want the systems I build to matter.',
  },
  {
    icon: '🤝',
    title: 'Teach and collaborate',
    description:
      'As a TA and orientation leader, I\'ve learned that explaining things clearly is as valuable as building them.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-content">
        {/* Hero */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">About me</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
            Building at the intersection of AI and software engineering.
          </h1>

          <div className="space-y-4 text-secondary text-lg leading-relaxed">
            <p>
              I'm <strong className="text-primary">Yukta Kulkarni</strong> — an AI and Full Stack
              Engineer currently pursuing my Master's in Computer Science at{' '}
              <strong className="text-violet-400">NYU Tandon</strong> (graduating May 2026). I build
              intelligent, scalable systems that create real-world impact.
            </p>
            <p>
              Most recently, I was an AI Engineer Intern at{' '}
              <strong className="text-amber-400">Systematic Ventures</strong>, where I built
              production AI modules and a financial intelligence SaaS platform that accelerated
              investment decisions by ~30% using GPT-4o, RAG, and MongoDB vector search across
              370K+ companies and 850K+ funding rounds.
            </p>
            <p>
              Before that, I was a Machine Learning Engineer Intern at{' '}
              <strong className="text-cyan-400">Samsung R&D Institute</strong>, where I built an
              automated security vulnerability detection framework that improved XSS and SQL
              Injection detection accuracy by 40% across 15+ platforms.
            </p>
            <p>
              I'm also a published researcher — with work on BERT-based treatment recommendation
              and CNN-based adversarial ML defense — and I've collaborated with the{' '}
              <strong className="text-blue-400">National University of Singapore</strong> on
              Neuro-Symbolic AI for commonsense reasoning.
            </p>
            <p>
              Outside of engineering, I serve as a Teaching Assistant at NYU, led Graduate
              Orientation, and spoke at NYU's{' '}
              <strong className="text-primary">Tech for Good</strong> series on responsible AI.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="mailto:yk3213@nyu.edu"
              className="flex items-center gap-2 px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-all duration-200 text-sm shadow-glow-violet"
            >
              <Mail size={14} />
              yk3213@nyu.edu
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-border-light text-primary font-medium rounded-xl transition-all hover:bg-white/[0.04] text-sm"
            >
              <Download size={14} />
              Resume
            </a>
            <a
              href="https://github.com/yuktakul04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-border-light text-secondary hover:text-primary font-medium rounded-xl transition-all hover:bg-white/[0.04] text-sm"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yukta-kulkarni-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-border-light text-secondary hover:text-primary font-medium rounded-xl transition-all hover:bg-white/[0.04] text-sm"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Values */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-6 tracking-tight">How I work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-border bg-surface/40 hover:border-border-light transition-all duration-200"
              >
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-6 tracking-tight">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-2xl border border-border bg-surface/40"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="font-semibold text-primary text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-secondary border border-white/[0.06] hover:border-white/[0.1] hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { href: '/projects', label: 'View Projects', desc: '4 featured projects', icon: '🚀' },
            {
              href: '/experience',
              label: 'Experience',
              desc: 'Systematic Ventures · Samsung R&D',
              icon: '💼',
            },
            { href: '/research', label: 'Research', desc: '2 publications · NUS collaboration', icon: '🔬' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-border-light bg-surface/40 hover:bg-surface/60 transition-all duration-200"
            >
              <span className="text-2xl">{link.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-primary">{link.label}</div>
                <div className="text-xs text-muted">{link.desc}</div>
              </div>
              <ArrowRight
                size={14}
                className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
