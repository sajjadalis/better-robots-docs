import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Better Robots.txt Docs",
  description: "Create Robots.txt the Pro Way",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Installation', link: '/installation' },
      { text: 'Quick Start', link: '/quick-start' },
      { text: 'Features', link: '/features' },
      { text: 'Settings', link: '/settings' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Features Overview', link: '/features' },
          { text: 'Settings', link: '/settings' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Examples', link: '/examples' },
          { text: 'Best Practices', link: '/best-practices' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'FAQ', link: '/faq' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Changelog', link: '/changelog' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wp-pods/better-robots-txt' }
    ],

    footer: {
      message: '© 2025 Better Robots.txt. Advanced WordPress Robots.txt Management plugin.'
    }
  }
})
