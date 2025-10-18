import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { Download, MessageSquareMore } from 'lucide-react'

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/SaladTechnologies/salad-kitchen-docs',
    links: [
      {
        icon: <MessageSquareMore />,
        label: 'Join Discord',
        text: 'Join Discord',
        type: 'icon',
        url: 'https://discord.gg/salad',
      },
      {
        icon: <Download />,
        secondary: true,
        text: 'Download Salad',
        url: 'https://salad.com/download',
      },
    ],
    nav: {
      title: <img src="/src/styles/logo.png" alt="Salad logo" style={{ height: 48 }} />,
    },
  }
}
