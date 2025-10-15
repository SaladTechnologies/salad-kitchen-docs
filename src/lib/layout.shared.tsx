import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { Download, MessageSquareMore } from 'lucide-react'

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/SaladTechnologies/salad-kitchen-docs',
    links: [
      {
        type: 'icon',
        label: 'Join Discord', // `aria-label`
        icon: <MessageSquareMore />,
        text: 'Join Discord',
        url: 'https://discord.gg/salad',
      },
      {
        text: 'Download Salad',
        icon: <Download />,
        url: 'https://salad.com/download',
        // secondary items will be displayed differently on navbar
        secondary: true,
      },
    ],
    nav: {
      title: <img src="/src/styles/SaladLogo.png" alt="Salad Logo" style={{ height: 48 }} />,
    },
  }
}
