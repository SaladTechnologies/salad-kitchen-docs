import { baseOptions } from '@/lib/layout.shared'
import logoDark2xPng from '@/styles/logo-dark-2x.png'
import logoDarkPng from '@/styles/logo-dark.png'
import logoLight2xPng from '@/styles/logo-light-2x.png'
import logoLightPng from '@/styles/logo-light.png'
import { createFileRoute, Link } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <HomeLayout {...baseOptions()} className="justify-center py-32 text-center">
      <img
        srcSet={`${logoLightPng}, ${logoLight2xPng} 2x`}
        src={logoLightPng}
        alt="Salad logo"
        style={{ height: 64 }}
        className="mx-auto mb-8 dark:hidden"
      />
      <img
        srcSet={`${logoDarkPng}, ${logoDark2xPng} 2x`}
        src={logoDarkPng}
        alt="Salad logo"
        style={{ height: 64 }}
        className="mx-auto mb-8 hidden dark:block"
      />
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
