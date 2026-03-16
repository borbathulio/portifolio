'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 120)
        })
      }
    }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: '4+', label: 'Anos de exp.' },
    { value: '10+', label: 'Projetos' },
    { value: '3+', label: 'Clientes' },
  ]

  return (
    <section id="sobre" className="py-32 px-6 md:px-16" style={{ background:'var(--surface)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <div className="reveal section-fade flex items-center gap-3 mb-8">
              <span className="label">02 — Sobre mim</span>
              <div className="w-8 h-px" style={{ background:'var(--accent)' }} />
            </div>
            <h2 className="reveal section-fade" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem, 4.5vw, 3.5rem)', fontWeight:700, lineHeight:1.1, letterSpacing:'-0.02em', color:'var(--text)', marginBottom:'16px' }}>
              Code that ships.<br /><span style={{ color:'var(--accent)' }}>Design that sticks.</span>
            </h2>
            <div className="reveal section-fade divider-accent" />
            <div className="reveal section-fade space-y-4" style={{ color:'var(--text-dim)', fontSize:'15px', lineHeight:1.75, fontWeight:300 }}>
              <p>
                Sou Thúlio Borba, desenvolvedor frontend baseado no Brasil, especializado em React e Next.js. Transformo requisitos complexos em interfaces limpas, responsivas e acessíveis.
              </p>
              <p>
                Tenho experiência em projetos de alta complexidade — de sistemas de saúde digital com LGPD a landing pages de alta conversão. Escrevo código que outras pessoas conseguem manter.
              </p>
              <p>
                Também me preocupo com performance: Web Vitals, Lighthouse 100, acessibilidade e SEO técnico fazem parte do meu processo desde o início.
              </p>
            </div>
            <div className="reveal section-fade" style={{ marginTop:'28px' }}>
              <a href="#projetos" className="btn-outline text-xs">Ver projetos →</a>
            </div>
          </div>

          <div>
            <div className="reveal section-fade" style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:'4px', padding:'32px', marginBottom:'20px', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, var(--accent), var(--cyan))' }} />
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--accent)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'20px' }}>
                // perfil.ts
              </div>
              {[
                ['nome', '"Thúlio Borba"'],
                ['role', '"Frontend Developer"'],
                ['stack', '["React", "Next.js", "TS"]'],
                ['foco', '"UI/UX + Performance"'],
                ['status', '"open to work ✓"'],
              ].map(([key, val]) => (
                <div key={key} className="flex gap-3 mb-2" style={{ fontFamily:'var(--font-mono)', fontSize:'13px' }}>
                  <span style={{ color:'var(--text-dim)' }}>{key}:</span>
                  <span style={{ color: key === 'status' ? '#22c55e' : 'var(--cyan)' }}>{val}</span>
                </div>
              ))}
            </div>

            <div className="reveal section-fade" style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'1px', background:'var(--border)' }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{ background:'var(--card)', padding:'20px 12px', textAlign:'center' }}>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:'32px', fontWeight:700, color:'var(--accent)', letterSpacing:'-0.02em' }}>{stat.value}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--text-dim)', letterSpacing:'0.08em', textTransform:'uppercase', marginTop:'4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
