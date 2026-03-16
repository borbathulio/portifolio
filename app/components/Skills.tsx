'use client'
import { useEffect, useRef } from 'react'

const skills = [
  { category: 'Core', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
  { category: 'Frameworks', items: ['React 19', 'Next.js 15', 'Vue.js', 'Astro'] },
  { category: 'Styling', items: ['Tailwind CSS', 'Styled Components', 'Framer Motion', 'Sass'] },
  { category: 'State & Forms', items: ['Valtio', 'Zustand', 'React Hook Form', 'Zod'] },
  { category: 'Performance', items: ['Web Vitals', 'Lighthouse', 'A11y', 'SEO técnico'] },
  { category: 'Ferramentas', items: ['Git', 'Figma', 'Vite', 'Chart.js'] },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 80)
        })
      }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="habilidades" className="py-32 px-6 md:px-16" style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="reveal section-fade flex items-center gap-3 mb-6">
              <span className="label">03 — Stack</span>
              <div className="w-8 h-px" style={{ background:'var(--accent)' }} />
            </div>
            <h2 className="reveal section-fade" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem, 4.5vw, 3.5rem)', fontWeight:700, lineHeight:1.1, letterSpacing:'-0.02em', color:'var(--text)' }}>
              Tecnologias &amp; <span style={{ color:'var(--accent)' }}>Ferramentas</span>
            </h2>
          </div>
          <p className="reveal section-fade" style={{ color:'var(--text-dim)', fontSize:'14px', lineHeight:1.7, maxWidth:'260px', fontWeight:300 }}>
            Toolkit atual — tecnologias que uso no dia a dia com profundidade.
          </p>
        </div>

        <div className="reveal section-fade" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1px', background:'var(--border)' }}>
          {skills.map((group) => (
            <div key={group.category} style={{ background:'var(--card)', padding:'24px', position:'relative', overflow:'hidden', cursor:'default' }}
              onMouseEnter={(e) => { (e.currentTarget.querySelector('.skill-line') as HTMLElement).style.transform = 'scaleX(1)' }}
              onMouseLeave={(e) => { (e.currentTarget.querySelector('.skill-line') as HTMLElement).style.transform = 'scaleX(0)' }}>
              <div className="skill-line" style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'var(--accent)', transform:'scaleX(0)', transformOrigin:'left', transition:'transform 0.3s ease' }} />
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--accent)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'14px' }}>
                {group.category}
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {group.items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal section-fade" style={{ marginTop:'40px', paddingTop:'24px', borderTop:'1px solid var(--border)', display:'flex', flexWrap:'wrap', gap:'16px', alignItems:'center' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-dim)', letterSpacing:'0.08em' }}>sempre aprendendo //</span>
          {['React 19 RC', 'Next.js 15', 'AI/LLM APIs', 'Web Components'].map((item) => (
            <span key={item} style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--muted)', letterSpacing:'0.05em' }}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
