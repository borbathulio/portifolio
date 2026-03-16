'use client'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 100)
        })
      }
    }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const socials = [
    { label: 'GitHub', handle: '@thulio-borba', href: 'https://github.com' },
    { label: 'LinkedIn', handle: 'Thúlio Borba', href: 'https://linkedin.com' },
    { label: 'Email', handle: 'thulio@email.com', href: 'mailto:thulio@email.com' },
  ]

  return (
    <section id="contato" className="py-32 px-6 md:px-16" style={{ background:'var(--bg)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="mb-16">
          <div className="reveal section-fade flex items-center gap-3 mb-6">
            <span className="label">05 — Contato</span>
            <div className="w-8 h-px" style={{ background:'var(--accent)' }} />
          </div>
          <h2 className="reveal section-fade" style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem, 5vw, 4rem)', fontWeight:700, lineHeight:1.05, letterSpacing:'-0.02em', color:'var(--text)', maxWidth:'14ch' }}>
            Vamos construir algo <span style={{ color:'var(--accent)' }}>juntos?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="reveal section-fade" style={{ color:'var(--text-dim)', fontSize:'15px', lineHeight:1.75, fontWeight:300, marginBottom:'32px' }}>
              Aberto a projetos freelance, posições full-time e colaborações. Se tiver uma ideia ou projeto em mente, me chame.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
              {socials.map((social) => (
                <div key={social.label} className="reveal section-fade">
                  <a href={social.href} target="_blank" rel="noopener noreferrer"
                    style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 0', borderBottom:'1px solid var(--border)', textDecoration:'none', transition:'all 0.2s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor='var(--accent)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor='var(--border)' }}>
                    <div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--text-dim)', marginBottom:'4px' }}>{social.label}</div>
                      <div style={{ fontSize:'14px', color:'var(--text)', fontWeight:500 }}>{social.handle}</div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color:'var(--text-dim)' }}>
                      <path d="M3 11L11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal section-fade">
            {sent ? (
              <div style={{ display:'flex', flexDirection:'column', gap:'16px', padding:'40px 0' }}>
                <div style={{ width:'40px', height:'40px', border:'1px solid var(--accent)', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'2px' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8l4 4 8-8" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:700, color:'var(--text)' }}>Mensagem enviada!</h3>
                <p style={{ color:'var(--text-dim)', fontSize:'14px', fontWeight:300 }}>Obrigado pelo contato. Responderei em até 48h.</p>
                <button onClick={() => setSent(false)} className="btn-outline text-xs" style={{ marginTop:'8px', alignSelf:'flex-start' }}>Enviar outra</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
                {[{ id:'name', label:'Nome', type:'text', placeholder:'Seu nome completo' }, { id:'email', label:'Email', type:'email', placeholder:'seu@email.com' }].map((field) => (
                  <div key={field.id}>
                    <label style={{ display:'block', fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-dim)', marginBottom:'8px' }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} value={formState[field.id as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })} required
                      style={{ width:'100%', background:'var(--card)', border:'1px solid var(--border)', borderRadius:'2px', color:'var(--text)', fontSize:'14px', fontWeight:300, padding:'10px 14px', outline:'none', fontFamily:'var(--font-body)' }} />
                  </div>
                ))}
                <div>
                  <label style={{ display:'block', fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-dim)', marginBottom:'8px' }}>Mensagem</label>
                  <textarea placeholder="Me conte sobre seu projeto..." rows={4} value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })} required
                    style={{ width:'100%', background:'var(--card)', border:'1px solid var(--border)', borderRadius:'2px', color:'var(--text)', fontSize:'14px', fontWeight:300, padding:'10px 14px', outline:'none', resize:'none', fontFamily:'var(--font-body)' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent:'center', marginTop:'4px' }}>
                  Enviar mensagem →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto" style={{ marginTop:'64px', paddingTop:'24px', borderTop:'1px solid var(--border)', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'16px' }}>
        <span style={{ fontFamily:'var(--font-display)', fontSize:'20px', fontWeight:800, color:'var(--text)' }}>
          tb<span style={{ color:'var(--accent)' }}>.</span>
        </span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-dim)', letterSpacing:'0.08em' }}>
          © 2025 Thúlio Borba — Frontend Developer
        </span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-dim)', letterSpacing:'0.05em' }}>
          Built with Next.js
        </span>
      </div>
    </section>
  )
}
