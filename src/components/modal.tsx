import type { FunctionComponent, ReactNode } from 'react'

export interface ModalProps {
  /** The children that will show as the content inside the `Modal`. */
  children: ReactNode
  /** A callback function that will be called when the user clicks anywhere outside of the `Modal`. */
  onClose?: () => void
  /** The title describing the `Modal`. This will be used to properly label the dialog for screen readers. */
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
