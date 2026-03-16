'use client'
import { useEffect, useRef } from 'react'

export interface LiquidEtherProps {
  colors?: string[]
  mouseForce?: number
  cursorSize?: number
  isViscous?: boolean
  viscous?: number
  iterationsViscous?: number
  iterationsPoisson?: number
  resolution?: number
  isBounce?: boolean
  autoDemo?: boolean
  autoSpeed?: number
  autoIntensity?: number
  takeoverDuration?: number
  autoResumeDelay?: number
  autoRampDuration?: number
  color0?: string
  color1?: string
  color2?: string
}

export default function LiquidEther(props: LiquidEtherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width = canvas.offsetWidth
    const height = canvas.height = canvas.offsetHeight

    const color0 = props.color0 || props.colors?.[0] || 'transparent'
    const color2 = props.color2 || props.colors?.[2] || 'transparent'

    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, color0)
    gradient.addColorStop(1, color2)

    ctx.fillStyle = gradient
    ctx.globalAlpha = 0.05
    ctx.fillRect(0, 0, width, height)
  }, [props])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
    />
  )
}