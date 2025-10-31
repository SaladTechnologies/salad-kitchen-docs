import type { FunctionComponent, ReactNode } from 'react'

export interface ModalProps {
  children: ReactNode
  onClose?: () => void
  title: string
}

export const Modal: FunctionComponent<ModalProps> = ({ children, onClose, title }) => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center">
      <div className="fixed z-50 min-h-screen w-full bg-neutral-950/50" onClick={onClose} aria-hidden="true" />
      <section
        className="z-50 flex max-h-96 max-w-2xl flex-col overflow-auto bg-neutral-100 p-8 shadow-md sm:max-h-full"
        role="dialog"
        title={title}
      >
        {children}
      </section>
    </div>
  )
}
