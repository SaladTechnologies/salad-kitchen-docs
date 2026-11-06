import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle'
import { useEffect, useState } from 'react'

/** LocalStorage key holding the visitor's choice: 'on' or 'off'. */
export const BACKGROUND_PATTERN_KEY = 'salad-bg-pattern'

/** Whether the pattern is shown to visitors who have never used the toggle. */
export const BACKGROUND_PATTERN_DEFAULT: 'on' | 'off' = 'on'

/**
 * Parallax layers: how fast each one moves relative to the page (0 stays fixed, 1 scrolls with the content), and the
 * size in pixels of its tile in src/styles (needed to wrap the offset seamlessly). Keep in sync with app.css.
 */
const PARALLAX_LAYERS = [
  { name: 'back', speed: 0.15, tile: 380 },
  { name: 'front', speed: 0.5, tile: 520 },
]

const parallaxUpdates = PARALLAX_LAYERS.map(
  ({ name, speed, tile }) =>
    `d.style.setProperty('--salad-pattern-${name}-offset',(-(y*${speed})%${tile}).toFixed(1)+'px');`,
).join('')

/**
 * Runs in <head> before the page paints, so the saved choice is applied without a flash. Keep it dependency-free. It
 * also drives the parallax: on scroll it moves each pattern layer by a fraction of the scroll distance through CSS
 * variables (see app.css). Skipped for visitors who prefer reduced motion.
 */
export const backgroundPatternInitScript = `(function(){var d=document.documentElement;try{var v=localStorage.getItem('${BACKGROUND_PATTERN_KEY}');d.setAttribute('data-bg-pattern',v==='on'||v==='off'?v:'${BACKGROUND_PATTERN_DEFAULT}')}catch(e){d.setAttribute('data-bg-pattern','${BACKGROUND_PATTERN_DEFAULT}')}if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;var t=false;function u(){t=false;var y=window.scrollY;${parallaxUpdates}}window.addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(u)}},{passive:true});u()})();`

const PatternIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M7 10 12.5 19.5H1.5z" />
    <path d="M17 4 22.5 13.5H11.5z" opacity=".6" />
  </svg>
)

export function BackgroundPatternToggle() {
  const [enabled, setEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    setEnabled(document.documentElement.getAttribute('data-bg-pattern') !== 'off')
  }, [])

  const toggle = () => {
    const next = !(enabled ?? true)
    setEnabled(next)
    const value = next ? 'on' : 'off'
    document.documentElement.setAttribute('data-bg-pattern', value)
    try {
      localStorage.setItem(BACKGROUND_PATTERN_KEY, value)
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); the choice then lasts for this page only.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle background pattern"
      aria-pressed={enabled ?? undefined}
      title={enabled === false ? 'Show background pattern' : 'Hide background pattern'}
      className="inline-flex items-center rounded-full border p-0"
    >
      <span
        className={
          'size-6.5 rounded-full p-1.5 ' +
          (enabled === false ? 'text-fd-muted-foreground' : 'bg-fd-accent text-fd-accent-foreground')
        }
      >
        <PatternIcon className="size-full" />
      </span>
    </button>
  )
}

/** Replaces Fumadocs' theme switch: the pattern toggle next to the light/dark toggle. */
export function ThemeControls() {
  return (
    <div className="ms-auto flex items-center gap-1.5">
      <BackgroundPatternToggle />
      <ThemeToggle className="p-0" />
    </div>
  )
}
