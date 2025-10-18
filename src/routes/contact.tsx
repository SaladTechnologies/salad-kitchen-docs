import { baseOptions } from '@/lib/layout.shared'
import { createFileRoute, Link } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <HomeLayout {...baseOptions()} className="justify-center py-32 text-center">
      <h1 className="mb-4 text-xl font-medium">Need some extra help?</h1>
      <p>If you have questions or need assistance, feel free to contact us:</p>
      <ul>
        <li>
          <a href="https://discord.gg/salad">Ask in the SaladChefs Discord server</a>
        </li>
        <li>
          <Link to="/docs/$" params={{ _splat: 'guides/your-pc/216-how-to-create-a-support-ticket' }}>
            Create a Support Ticket
          </Link>
        </li>
        <li>
          <a href="mailto:support@salad.com">Email support@salad.com</a>
        </li>
      </ul>
    </HomeLayout>
  )
}
