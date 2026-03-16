'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    number: '01',
    title: 'Rede SOMOS',
    subtitle: 'Ecossistema Digital de Saúde — Healthtech',
    description: 'Plataforma Healthtech de alta complexidade conectando pacientes, profissionais e clínicas. Sistema com Prontuário Eletrônico do Paciente (PEP) unificado, Prontuário Afetivo para suporte a pacientes atípicos (TEA), telemedicina, rede social de saúde e dashboard de health tracking com sinais vitais em tempo real.',
    tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Valtio', 'Zod', 'React Hook Form', 'Chart.js'],
    type: 'Healthtech',
    highlights: ['Prontuário Eletrônico (PEP)', 'LGPD / Controle granular de dados', 'Telemedicina', 'Health Tracking'],
    link: '#',
    featured: true,
  },
  {
    number: '02',
    title: 'Grupo Amarante',
    subtitle: 'Landing Pages de Alta Conversão',
    description: 'Desenvolvimento de landing pages para o Grupo Amarante, com foco em performance, SEO técnico e alta conversão. Interfaces responsivas e otimizadas para campanhas de marketing digital, garantindo carregamento rápido e experiência fluida em todos os dispositivos.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO', 'Performance'],
    type: 'Marketing',
    highlights: ['Lighthouse 100', 'SEO técnico', 'Mobile-first', 'Alta conversão'],
    link: '#',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 100)
        })
      }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projetos" className="py-32 px-6 md:px-16" style={{ background:'var(--surface)', borderBottom:'1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="reveal section-fade flex items-center gap-3 mb-6">
              <span className="label">04 — Projetos</span>
              <div className="w-8 h-px" style={{ background:'var(--accent)' }} />
            </div>
            <h2 className="reveal section-fade" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem, 4.5vw, 3.5rem)', fontWeight:700, lineHeight:1.1, letterSpacing:'-0.02em', color:'var(--text)' }}>
              Trabalhos <span style={{ color:'var(--accent)' }}>selecionados</span>
            </h2>
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          {projects.map((project) => (
            <div key={project.number} className="reveal section-fade"
              style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:'4px', overflow:'hidden', position:'relative' }}>
              {project.featured && (
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, var(--accent), var(--cyan))' }} />
              )}
              <div style={{ padding:'32px' }}>
                <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'16px', flexWrap:'wrap' }}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px', flexWrap:'wrap' }}>
                        <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--accent)', letterSpacing:'0.1em' }}>{project.number}</span>
                        <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.08em', textTransform:'uppercase', border:'1px solid var(--border)', padding:'2px 8px', color:'var(--text-dim)', borderRadius:'2px' }}>
                          {project.type}
                        </span>
                        {project.featured && (
                          <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.08em', textTransform:'uppercase', border:'1px solid var(--accent)', padding:'2px 8px', color:'var(--accent)', borderRadius:'2px' }}>
                            Destaque
                          </span>
                        )}
                      </div>
                      <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem, 3vw, 2rem)', fontWeight:700, letterSpacing:'-0.02em', color:'var(--text)', marginBottom:'4px' }}>
                        {project.title}
                      </h3>
                      <p style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'var(--accent)', letterSpacing:'0.04em', marginBottom:'14px' }}>
                        {project.subtitle}
                      </p>
                      <p style={{ color:'var(--text-dim)', fontSize:'14px', lineHeight:1.75, maxWidth:'600px', fontWeight:300, marginBottom:'20px' }}>
                        {project.description}
                      </p>

                      <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'16px' }}>
                        {project.highlights.map((h) => (
                          <span key={h} style={{ display:'inline-flex', alignItems:'center', gap:'6px', fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--cyan)', letterSpacing:'0.04em' }}>
                            <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'var(--cyan)', display:'inline-block' }} />
                            {h}
                          </span>
                        ))}
                      </div>

                      <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <a href={project.link}
                      style={{ width:'40px', height:'40px', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-dim)', flexShrink:0, borderRadius:'2px', transition:'all 0.2s ease', textDecoration:'none' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor='var(--accent)'; (e.currentTarget as HTMLElement).style.color='var(--accent)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor='var(--border)'; (e.currentTarget as HTMLElement).style.color='var(--text-dim)' }}
                      aria-label={`Ver ${project.title}`}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
