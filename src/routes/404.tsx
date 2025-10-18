import { NotFound } from '@/components/not-found'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/404')({
  component: NotFound,
})
