import { baseOptions } from '@/lib/layout.shared'
import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'

declare global {
  interface Window {
    Beacon?: (arg0: string) => void
  }
}

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  function Beacon(arg0: string): void {
    if (typeof window !== 'undefined' && window.Beacon && typeof window.Beacon === 'function') {
      window.Beacon(arg0)
    } else {
      console.warn('Beacon is not available.')
    }
  }
  return (
    <HomeLayout {...baseOptions()} className="justify-center py-32 text-left">
      <section className="py-24 xl:text-xl">
        <div className="mx-auto max-w-screen-2xl gap-12 px-4 md:px-8 lg:flex">
          <ul className="mt-8 items-center gap-x-1 gap-y-3 lg:mt-0 lg:gap-x-0">
            <li className="space-y-3 border-t py-6 md:max-w-sm md:border-t-0 md:py-0 lg:max-w-none lg:px-12">
              <h2 className="mb-4 text-lg font-bold xl:text-5xl">Need help?</h2>
              <p>
                If you have questions or need assistance, reach out to us using our contact form. We aim to respond
                within 24 business hours.
              </p>
              <a
                href="#"
                className="text-m mt-12 mb-12 flex items-center gap-1 font-medium text-[#53a626] duration-150 hover:scale-110"
                onClick={() => Beacon('open')}
              >
                Contact Support
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="space-y-3 border-t py-6 md:max-w-sm md:border-t-0 md:py-0 lg:max-w-none lg:border-t lg:px-12">
              <h2 className="mt-8 mb-4 text-lg font-bold xl:text-5xl">Join our community!</h2>
              <p>
                Join our 45,000+ member Discord Server or our Reddit and ask other Chefs for assistance with your
                concerns.
              </p>
              <a
                href="https://discord.gg/salad"
                className="text-m mt-12 flex items-center gap-1 font-medium text-[#53a626] duration-150 hover:scale-110"
              >
                Join our Discord
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://reddit.com/r/SaladChefs"
                className="text-m mt-4 mb-12 flex items-center gap-1 font-medium text-[#53a626] duration-150 hover:scale-110"
              >
                Join our Reddit
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="space-y-3 border-t py-6 md:max-w-sm md:border-t-0 md:py-0 lg:max-w-none lg:border-t lg:px-12">
              <h2 className="mt-8 mb-4 text-lg font-bold xl:text-5xl">Send us an email!</h2>
              <p>Contact the Salad Support team directly via email. We aim to respond within 24 business hours.</p>
              <a
                href="mailto:support@salad.com?subject=I Need Help with Salad?&body=Hi, I'm having an issue with Salad and would like some assistance."
                className="text-m mt-12 flex items-center gap-1 font-medium text-[#53a626] duration-150 hover:scale-110"
              >
                Send an email
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </HomeLayout>
  )
}
