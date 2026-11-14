import { useEffect, useState } from 'react'
import { services } from '../data/services'

export function useActiveService() {
  const [activeId, setActiveId] = useState(services[0].id)

  useEffect(() => {
    const nodes = services
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n))

    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  return activeId
}
