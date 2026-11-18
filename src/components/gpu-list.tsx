'use client'
import rates from '@/data/gpu-earning-rates.json'
import { useDeferredValue, useEffect, useMemo, useState, type FunctionComponent } from 'react'

interface Gpu {
  aliases?: string[]
  group: string
  high: number
  low: number
  lowest: number
  medium: number
  name: string
}

const allGpus: Gpu[] = rates.gpus
const groups = ['RTX 50', 'RTX 40', 'RTX 30', 'RTX 20', 'GTX', 'Laptop', 'AMD', 'Workstation']
const storageKey = 'salad-my-gpus'
const formatRate = (rate: number): string => `$${rate.toFixed(3)}`

const chipClass = (active: boolean): string =>
  `rounded-full border px-3 py-1 text-sm ${
    active
      ? 'border-fd-primary bg-fd-primary text-fd-primary-foreground'
      : 'border-fd-border bg-fd-background text-fd-foreground'
  }`

/** A filterable table of the GPUs that can run GPU container jobs, with their hourly earning rates. */
export const GpuList: FunctionComponent = () => {
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState<string | undefined>(undefined)
  const [mine, setMine] = useState<string[]>([])
  const [onlyMine, setOnlyMine] = useState(false)
  const deferredQuery = useDeferredValue(query)

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]')
      if (Array.isArray(saved)) {
        setMine(saved.filter((name): name is string => typeof name === 'string'))
      }
    } catch {
      // Saved GPUs are a convenience. Without storage the list still works.
    }
  }, [])

  const toggleMine = (name: string): void => {
    const next = mine.includes(name) ? mine.filter((saved) => saved !== name) : [...mine, name]
    setMine(next)
    if (next.length === 0) {
      setOnlyMine(false)
    }

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next))
    } catch {
      // Saved GPUs are a convenience. Without storage the list still works.
    }
  }

  const visible = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase()
    return allGpus.filter((gpu) => {
      if (onlyMine && !mine.includes(gpu.name)) {
        return false
      }

      if (group !== undefined && gpu.group !== group) {
        return false
      }

      return (
        needle === '' ||
        gpu.name.toLowerCase().includes(needle) ||
        (gpu.aliases ?? []).some((alias) => alias.toLowerCase().includes(needle))
      )
    })
  }, [deferredQuery, group, mine, onlyMine])

  return (
    <div>
      <input
        aria-label="Search the GPU list"
        className="border-fd-border bg-fd-background text-fd-foreground w-full rounded-md border px-3 py-2 text-sm"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for your GPU, for example 4070"
        type="search"
        value={query}
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          aria-pressed={group === undefined}
          className={chipClass(group === undefined)}
          onClick={() => setGroup(undefined)}
          type="button"
        >
          All
        </button>
        {groups.map((name) => (
          <button
            aria-pressed={group === name}
            className={chipClass(group === name)}
            key={name}
            onClick={() => setGroup(group === name ? undefined : name)}
            type="button"
          >
            {name}
          </button>
        ))}
        <button
          aria-pressed={onlyMine}
          className={chipClass(onlyMine)}
          disabled={mine.length === 0}
          onClick={() => setOnlyMine(!onlyMine)}
          type="button"
        >
          ★ My GPUs ({mine.length})
        </button>
      </div>
      <p aria-live="polite" className="text-fd-muted-foreground text-sm">
        Showing {visible.length} of {allGpus.length} GPUs. Rates are in US dollars per hour.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Mine</th>
              <th>GPU</th>
              <th>High</th>
              <th>Medium</th>
              <th>Low</th>
              <th>Lowest</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((gpu) => {
              const saved = mine.includes(gpu.name)
              return (
                <tr key={gpu.name}>
                  <td>
                    <button
                      aria-label={saved ? `Remove ${gpu.name} from my GPUs` : `Add ${gpu.name} to my GPUs`}
                      aria-pressed={saved}
                      className="px-2 text-lg"
                      onClick={() => toggleMine(gpu.name)}
                      type="button"
                    >
                      {saved ? '★' : '☆'}
                    </button>
                  </td>
                  <td>{gpu.name}</td>
                  <td>{formatRate(gpu.high)}</td>
                  <td>{formatRate(gpu.medium)}</td>
                  <td>{formatRate(gpu.low)}</td>
                  <td>{formatRate(gpu.lowest)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
