'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => {
      el.querySelectorAll('.h-reveal').forEach((item, i) => {
        setTimeout(() => (item as HTMLElement).style.cssText += 'opacity:1;transform:translateY(0)', i * 150)
      })
    }, 200)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto w-full pt-20" ref={ref}>
        <div className="h-reveal" style={{ opacity:0, transform:'translateY(16px)', transition:'opacity 0.7s ease, transform 0.7s ease', marginBottom:'20px' }}>
          <div className="flex items-center gap-3">
            <span className="label">01 — Hello world</span>
            <div className="flex-1 max-w-[60px] h-px bg-[var(--accent)]" />
          </div>
        </div>

        <div className="h-reveal" style={{ opacity:0, transform:'translateY(20px)', transition:'opacity 0.9s ease, transform 0.9s ease' }}>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(3rem, 9vw, 7.5rem)', fontWeight:800, lineHeight:1.0, letterSpacing:'-0.03em', color:'var(--text)' }}>
            Thúlio<br />
            <span style={{ color:'var(--accent)' }}>Borba</span>
          </h1>
        </div>

        <div className="h-reveal" style={{ opacity:0, transform:'translateY(16px)', transition:'opacity 0.7s ease, transform 0.7s ease', marginTop:'16px', marginBottom:'32px' }}>
          <p style={{ fontFamily:'var(--font-mono)', fontSize:'clamp(14px, 2vw, 18px)', color:'var(--text-dim)', letterSpacing:'0.04em' }}>
            Frontend Developer &nbsp;<span style={{ color:'var(--border)' }}>/</span>&nbsp; React &nbsp;<span style={{ color:'var(--border)' }}>/</span>&nbsp; Next.js &nbsp;<span style={{ color:'var(--border)' }}>/</span>&nbsp; TypeScript
          </p>
        </div>

        <div className="h-reveal" style={{ opacity:0, transform:'translateY(16px)', transition:'opacity 0.7s ease, transform 0.7s ease', marginBottom:'40px', maxWidth:'440px' }}>
          <p style={{ color:'var(--text-dim)', fontSize:'15px', lineHeight:1.75, fontWeight:300 }}>
            Construo interfaces que performam e impressionam — do design system ao produto final, com foco em código limpo e experiência do usuário.
          </p>
        </div>

        <div className="h-reveal flex gap-4 flex-wrap" style={{ opacity:0, transform:'translateY(12px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <a href="#projetos" className="btn-primary">
            Ver projetos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contato" className="btn-outline">Contato</a>
        </div>

        <div className="h-reveal" style={{ opacity:0, transform:'translateY(12px)', transition:'opacity 0.7s ease, transform 0.7s ease', marginTop:'64px' }}>
          <div className="flex items-center gap-6">
            {['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
