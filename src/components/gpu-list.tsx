'use client'
import rates from '@/data/gpu-earning-rates.json'
import { Fragment, useDeferredValue, useEffect, useMemo, useState, type FunctionComponent } from 'react'

interface Gpu {
  group: string
  high: number
  low: number
  lowest: number
  medium: number
  name: string
  vram: number
}

const allGpus: Gpu[] = rates.gpus
const groups = [
  'RTX 50 series',
  'RTX 40 series',
  'RTX 30 series',
  'RTX 20 series',
  'GTX',
  'AMD',
  'Workstation',
  'Laptops',
]
const storageKey = 'salad-my-gpus'
const cellStyle = { paddingInline: '0.5rem' }
const rateStyle = { paddingInline: '0.375rem' }
const rateClass = 'text-xs sm:text-sm'
const gpuId = (gpu: Gpu): string => `${gpu.name} (${gpu.vram} GB)`
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
  const [savedGpus, setSavedGpus] = useState<string[]>([])
  const [onlySaved, setOnlySaved] = useState(false)
  const deferredQuery = useDeferredValue(query)

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]')
      if (Array.isArray(saved)) {
        setSavedGpus(saved.filter((id): id is string => typeof id === 'string'))
      }
    } catch {
      // Saved GPUs are a convenience. Without storage the list still works.
    }
  }, [])

  const toggleSaved = (id: string): void => {
    const next = savedGpus.includes(id) ? savedGpus.filter((saved) => saved !== id) : [...savedGpus, id]
    setSavedGpus(next)
    if (next.length === 0) {
      setOnlySaved(false)
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
      if (onlySaved && !savedGpus.includes(gpuId(gpu))) {
        return false
      }

      if (group !== undefined && gpu.group !== group) {
        return false
      }

      return needle === '' || gpuId(gpu).toLowerCase().includes(needle)
    })
  }, [deferredQuery, group, onlySaved, savedGpus])

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
          aria-pressed={onlySaved}
          className={chipClass(onlySaved)}
          disabled={savedGpus.length === 0}
          onClick={() => setOnlySaved(!onlySaved)}
          type="button"
        >
          ★ My GPUs ({savedGpus.length})
        </button>
      </div>
      <p aria-live="polite" className="text-fd-muted-foreground text-sm">
        Showing {visible.length} of {allGpus.length} GPUs. Rates are in US dollars per hour.
      </p>
      <div className="overflow-x-auto">
        <table className="text-sm">
          <thead>
            <tr>
              <th style={cellStyle}>GPU</th>
              <th className={rateClass} style={rateStyle}>
                Lowest
              </th>
              <th className={rateClass} style={rateStyle}>
                Low
              </th>
              <th className={rateClass} style={rateStyle}>
                Medium
              </th>
              <th className={rateClass} style={rateStyle}>
                High
              </th>
            </tr>
          </thead>
          <tbody>
            {groups.map((name) => {
              const gpus = visible.filter((gpu) => gpu.group === name)
              if (gpus.length === 0) {
                return null
              }

              return (
                <Fragment key={name}>
                  <tr>
                    <th className="bg-fd-muted text-left" colSpan={5} scope="colgroup" style={cellStyle}>
                      {name}
                    </th>
                  </tr>
                  {gpus.map((gpu) => {
                    const id = gpuId(gpu)
                    const isSaved = savedGpus.includes(id)
                    return (
                      <tr
                        className={`cursor-pointer ${isSaved ? 'bg-fd-primary/10' : ''}`}
                        key={id}
                        onClick={() => toggleSaved(id)}
                      >
                        <td style={cellStyle}>
                          <button
                            aria-label={isSaved ? `Remove ${id} from my GPUs` : `Add ${id} to my GPUs`}
                            aria-pressed={isSaved}
                            className="flex w-full items-center gap-2 text-left"
                            onClick={(event) => {
                              event.stopPropagation()
                              toggleSaved(id)
                            }}
                            type="button"
                          >
                            <span aria-hidden="true" className="text-lg">
                              {isSaved ? '★' : '☆'}
                            </span>
                            <span className="min-w-[5.5rem]">
                              {gpu.name}{' '}
                              <span className="text-fd-muted-foreground block sm:inline">({gpu.vram} GB)</span>
                            </span>
                          </button>
                        </td>
                        <td className={rateClass} style={rateStyle}>
                          {formatRate(gpu.lowest)}
                        </td>
                        <td className={rateClass} style={rateStyle}>
                          {formatRate(gpu.low)}
                        </td>
                        <td className={rateClass} style={rateStyle}>
                          {formatRate(gpu.medium)}
                        </td>
                        <td className={rateClass} style={rateStyle}>
                          {formatRate(gpu.high)}
                        </td>
                      </tr>
                    )
                  })}
                </Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
