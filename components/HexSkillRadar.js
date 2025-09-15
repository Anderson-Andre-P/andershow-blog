import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

// HexSkillRadar
// Props:
// - skills: [{ label: 'Comunicação', value: 80 }, ...] (values 0-100)
// - size: svg width/height in px (default 420)
// - max: maximum skill value (default 100)
// - levels: number of concentric grid levels (default 5)
// - colors: optional color string for the filled polygon
// - showLabels: whether to render labels

export default function HexSkillRadar({
  skills = [],
  size = 420,
  max = 100,
  levels = 5,
  colors = '#4F46E5',
  showLabels = true,
}) {
  const center = size / 2
  const radius = size * 0.35 // leave margins for labels/tooltips
  const count = Math.max(3, skills.length) // support N-sided if needed

  // normalize skills length to count, if user supplies 6 typical it'll be hex, but support other lengths
  const arrangedSkills = useMemo(() => {
    // if skills length is 0, return placeholders
    if (!skills || skills.length === 0) {
      return Array.from({ length: 6 }).map((_, i) => ({ label: `Habilidade ${i + 1}`, value: 0 }))
    }
    // if fewer than count, fill
    return skills
      .slice(0, count)
      .concat(
        Array.from({ length: Math.max(0, count - skills.length) }).map((_, i) => ({
          label: `Habilidade ${skills.length + i + 1}`,
          value: 0,
        }))
      )
  }, [skills, count])

  // compute points for a given normalized value (0..1)
  const pointFor = (index, norm) => {
    const angle = (Math.PI * 2 * index) / count - Math.PI / 2 // start at top
    const r = radius * norm
    const x = center + Math.cos(angle) * r
    const y = center + Math.sin(angle) * r
    return [x, y]
  }

  // grid polygons for levels
  const gridPolygons = useMemo(() => {
    return Array.from({ length: levels }, (_, level) => {
      const norm = (level + 1) / levels
      const pts = Array.from({ length: count }, (_, i) => pointFor(i, norm).join(',')).join(' ')
      return pts
    })
  }, [levels, count, radius])

  const valuePoints = useMemo(() => {
    return arrangedSkills.map((s, i) => {
      const norm = Math.max(0, Math.min(1, (s.value || 0) / max))
      return pointFor(i, norm)
    })
  }, [arrangedSkills, max, center, radius, count])

  const polygonPointsString = valuePoints.map((p) => p.join(',')).join(' ')

  const [hoverIdx, setHoverIdx] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e, i) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setHoverIdx(i)
    setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top })
  }

  const handleMouseLeave = () => {
    setHoverIdx(null)
  }

  return (
    <div className="relative inline-block" style={{ width: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="radarFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopOpacity="0.35" stopColor={colors} />
            <stop offset="100%" stopOpacity="0.08" stopColor={colors} />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* concentric grid */}
        <g
          className="opacity-60"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          style={{ color: '#9CA3AF' }}
        >
          {gridPolygons.map((pts, idx) => (
            <polygon key={idx} points={pts} />
          ))}
        </g>

        {/* radial lines */}
        <g stroke="#D1D5DB" strokeWidth="0.8">
          {Array.from({ length: count }).map((_, i) => {
            const [x, y] = pointFor(i, 1)
            return <line key={i} x1={center} y1={center} x2={x} y2={y} />
          })}
        </g>

        {/* labels on outer ring */}
        {showLabels && (
          <g fontSize={12} fontFamily="Inter, system-ui, sans-serif" fill="#374151">
            {arrangedSkills.map((s, i) => {
              const [x, y] = pointFor(i, 1.08) // slightly outside
              // determine alignment depending on quadrant
              const align = x > center + 6 ? 'start' : x < center - 6 ? 'end' : 'middle'
              const dy = y > center + 6 ? 14 : y < center - 6 ? -6 : 4
              return (
                <text key={i} x={x} y={y + dy} textAnchor={align} style={{ fontWeight: 600 }}>
                  {s.label}
                </text>
              )
            })}
          </g>
        )}

        {/* value polygon (animated) */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <motion.polygon
            points={polygonPointsString}
            fill="url(#radarFill)"
            stroke={colors}
            strokeWidth={2}
            strokeLinejoin="round"
            filter="url(#softShadow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9 }}
          />

          {/* points */}
          {valuePoints.map((p, i) => (
            <g
              key={i}
              onMouseEnter={(e) => handleMouseEnter(e, i)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
            >
              <circle cx={p[0]} cy={p[1]} r={6} fill="#fff" stroke={colors} strokeWidth={2} />
              <circle cx={p[0]} cy={p[1]} r={3} fill={colors} />
            </g>
          ))}
        </motion.g>
      </svg>

      {hoverIdx !== null && (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 transform rounded-md border border-gray-200 bg-white/95 px-3 py-1 text-sm text-gray-800 shadow-md"
          style={{ left: tooltipPos.x, top: tooltipPos.y - 48 }}
        >
          <div className="font-medium">{arrangedSkills[hoverIdx].label}</div>
          <div className="text-xs">
            {arrangedSkills[hoverIdx].value}/{max}
          </div>
        </div>
      )}

      {/* legend / accessibility info */}
      <div className="mt-2 flex justify-center text-xs text-gray-500">
        Max value: {max} • Levels: {levels}
      </div>
    </div>
  )
}
