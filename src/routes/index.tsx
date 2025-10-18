import { baseOptions } from '@/lib/layout.shared'
import { createFileRoute, Link } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <HomeLayout {...baseOptions()} className="justify-center py-32 text-center">
      <img src="/src/styles/logo.png" alt="Salad Logo" style={{ height: 64 }} className="mx-auto mb-8" />
      <h1 className="mb-4 text-xl font-medium">Need help in the Kitchen? Let's Chop to it.</h1>
      <Link
        to="/docs/$"
        params={{
          _splat: '',
        }}
        className="bg-fd-primary text-fd-primary-foreground mx-auto rounded-lg px-3 py-2 text-sm font-medium"
      >
        Open Support
      </Link>
    </HomeLayout>
  )
}
