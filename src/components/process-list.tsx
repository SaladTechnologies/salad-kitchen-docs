'use client'
import processes from '@/data/intensive-processes.json'
import { useDeferredValue, useMemo, useState, type FunctionComponent } from 'react'

interface Process {
  files: string[]
  name: string
}

const allProcesses: Process[] = processes

/** A filterable table of the programs on Salad's intensive process list. */
export const ProcessList: FunctionComponent = () => {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const visible = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase()
    if (needle === '') {
      return allProcesses
    }

    return allProcesses.filter(
      (process) =>
        process.name.toLowerCase().includes(needle) ||
        process.files.some((file) => file.toLowerCase().includes(needle)),
    )
  }, [deferredQuery])

  return (
    <div>
      <input
        aria-label="Search the intensive process list"
        className="border-fd-border bg-fd-background text-fd-foreground w-full rounded-md border px-3 py-2 text-sm"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by program or file name"
        type="search"
        value={query}
      />
      <p aria-live="polite" className="text-fd-muted-foreground text-sm">
        Showing {visible.length.toLocaleString('en-US')} of {allProcesses.length.toLocaleString('en-US')} programs
      </p>
      <table>
        <thead>
          <tr>
            <th>Program</th>
            <th>File names</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((process) => (
            <tr key={process.name}>
              <td>{process.name}</td>
              <td>
                {process.files.map((file, index) => (
                  <span key={file}>
                    {index > 0 ? ', ' : null}
                    <code>{file}</code>
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
