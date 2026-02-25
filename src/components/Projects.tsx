'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Coveagent (Frontend)',
    description:
      'Luxury real estate interface with custom themes, featured areas, listing filters, and real-time data flows.',
    tags: ['React', 'Tailwind CSS', 'REST APIs', 'Responsive UI'],
    glow: 'from-cyan-400/20 to-emerald-300/20',
    border: 'border-cyan-300/20',
  },
  {
    id: 2,
    title: 'Coveagent (Backend)',
    description:
      'Admin and super-admin modules for leads, properties, permissions, themes, pages, billing, and operations.',
    tags: ['PHP', 'Laravel/Lumen', 'MySQL', 'Multi-Tenancy'],
    glow: 'from-emerald-300/20 to-amber-200/20',
    border: 'border-emerald-300/20',
  },
  {
    id: 3,
    title: 'Lending Hub',
    description: 'Real-time mortgage comparison system with structured multi-step application flow.',
    tags: ['Node.js', 'Express', 'API Integrations', 'Product Support'],
    glow: 'from-amber-200/20 to-cyan-300/20',
    border: 'border-amber-100/20',
  },
  {
    id: 4,
    title: 'Single Interface - Audit Module',
    description:
      'Brand audit dashboard combining keyword and location performance using maps and external provider data.',
    tags: ['Google Maps', 'Yelp API', 'Autocomplete', 'Analytics UI'],
    glow: 'from-blue-300/20 to-cyan-400/20',
    border: 'border-blue-200/20',
  },
];

const skillGroups = [
  {
    title: 'Backend',
    values: ['PHP', 'Laravel', 'Lumen', 'Node.js', 'Express.js', 'Fastify'],
  },
  {
    title: 'Frontend',
    values: ['JavaScript', 'React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Data & APIs',
    values: ['MySQL', 'MongoDB Atlas', 'RESTful APIs', 'RETS / RESO', 'Third-party integrations'],
  },
  {
    title: 'Delivery',
    values: ['Production debugging', 'Root cause analysis', 'GitHub', 'GitLab', 'Linux'],
  },
];

export default function Projects() {
  return (
    <section className="relative z-30 overflow-hidden bg-[#121212] px-6 py-24 md:px-16 lg:px-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(253,230,138,0.14),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.1),transparent_38%)]" />
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-200/80">Selected Work</p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Production-grade platforms for CRM, real estate, and lead systems.
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border ${project.border} bg-white/[0.03] p-8 backdrop-blur-2xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mb-8 text-base leading-relaxed text-white/70">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-black/20 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-cyan-200/80">Experience</p>
            <h3 className="mb-4 text-2xl font-semibold text-white">Senior Web Developer</h3>
            <p className="mb-1 text-white/80">Peregrine IT Solutions, Noida</p>
            <p className="mb-6 text-sm text-white/50">Nov 2022 - Present</p>
            <ul className="space-y-3 text-white/70">
              <li>Technical support for live CRM and real estate systems serving 100+ clients.</li>
              <li>Built a multi-tenant CRM with AI calling, campaigns, and social scheduling, reducing ops time by 60%.</li>
              <li>Resolved backend defects across PHP services, APIs, and database performance bottlenecks.</li>
              <li>Partnered with business and support teams to triage production issues and ship fixes quickly.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-cyan-200/80">Contact</p>
            <h3 className="mb-5 text-2xl font-semibold text-white">Ayush Sahu</h3>
            <div className="space-y-3 text-sm text-white/75">
              <a href="mailto:ayushsahu.work@gmail.com" className="block hover:text-white">
                ayushsahu.work@gmail.com
              </a>
              <a href="tel:+919770591108" className="block hover:text-white">
                +91 977-059-1108
              </a>
              <a href="https://sahuayu.netlify.app" target="_blank" rel="noreferrer" className="block hover:text-white">
                sahuayu.netlify.app
              </a>
              <p>Noida, Uttar Pradesh, India</p>
            </div>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-cyan-200/80">Skill Stack</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-3 text-lg font-semibold text-white">{group.title}</h4>
                <p className="text-white/70">{group.values.join(' • ')}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-white/65">
            Education: B.Tech (Shri Vaishnav Vidyapeeth Vishwavidyalaya, Jul 2019 - Aug 2022), M.Tech in Computer Science (VNS Group Of Institutions, Jan 2024 - Present).
          </div>
        </motion.section>
      </div>
    </section>
  );
}
